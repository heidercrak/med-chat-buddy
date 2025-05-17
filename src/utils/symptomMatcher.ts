
import { 
  findMatchingCategories, 
  checkForEmergencySymptoms, 
  getMedicationsByIds, 
  getWarningMessage 
} from "../services/supabaseService";
import { SymptomCategory, Medication } from "../services/supabaseService";

export interface BotResponse {
  message: string;
  isEmergency: boolean;
  hasMedicalRecommendation: boolean;
  recommendedActions?: string[];
}

export const processUserSymptoms = async (userInput: string): Promise<BotResponse> => {
  console.log("Procesando entrada de usuario:", userInput);
  
  // Check for emergency symptoms first
  const isEmergency = await checkForEmergencySymptoms(userInput);
  
  if (isEmergency) {
    return {
      message: "⚠️ EMERGENCIA MÉDICA: Los síntomas que describe pueden indicar una condición que requiere atención médica inmediata. Por favor contacte a servicios de emergencia o acuda al centro médico más cercano inmediatamente.",
      isEmergency: true,
      hasMedicalRecommendation: false,
      recommendedActions: ["Llamar a servicios de emergencia", "Acudir al hospital más cercano"]
    };
  }

  // Find matching symptom categories from Supabase
  const matchingCategories = await findMatchingCategories(userInput);
  console.log("Categorías encontradas:", matchingCategories.length, matchingCategories.map(c => c.name));
  
  if (matchingCategories.length === 0) {
    return {
      message: "No he podido identificar específicamente sus síntomas. ¿Podría proporcionar más detalles sobre lo que está experimentando? Por ejemplo, describa la ubicación del dolor o molestia, cuándo comenzó, y qué lo mejora o empeora.",
      isEmergency: false,
      hasMedicalRecommendation: false
    };
  }

  // Construct response based on matching categories
  let responseMessage = "";
  const allMedicationIds: string[] = [];
  const allSelfCareAdvice: string[] = [];
  let shouldSeekMedicalAttention = false;

  matchingCategories.forEach(category => {
    responseMessage += `\n\n**${category.name}**:\n`;
    responseMessage += `Causas posibles: ${category.possible_causes.join(", ")}\n`;
    
    if (category.source) {
      responseMessage += `Fuente: ${category.source}\n`;
    }
    
    // Add medication recommendations if available
    if (category.recommended_medications && category.recommended_medications.length > 0) {
      category.recommended_medications.forEach(medId => {
        if (!allMedicationIds.includes(medId)) {
          allMedicationIds.push(medId);
        }
      });
    }
    
    // Add self-care advice
    if (category.self_care_advice && category.self_care_advice.length > 0) {
      category.self_care_advice.forEach(advice => {
        if (!allSelfCareAdvice.includes(advice)) {
          allSelfCareAdvice.push(advice);
        }
      });
    }
    
    // Check if medical attention is recommended
    if (category.seek_medical_attention) {
      shouldSeekMedicalAttention = true;
    }
  });
  
  // Add medication details to response
  if (allMedicationIds.length > 0) {
    console.log("Buscando medicamentos con IDs:", allMedicationIds);
    const recommendedMeds = await getMedicationsByIds(allMedicationIds);
    console.log("Medicamentos encontrados:", recommendedMeds.length);
    
    if (recommendedMeds.length > 0) {
      responseMessage += "\n**Medicamentos de venta libre que podrían ayudar**:\n";
      
      recommendedMeds.forEach(med => {
        responseMessage += `- **${med.name}** (${med.active_ingredient}): ${med.dosage}\n`;
        responseMessage += `  Usado para: ${med.used_for.join(", ")}\n`;
        if (med.contraindications && med.contraindications.length > 0) {
          responseMessage += `  No usar si tiene: ${med.contraindications.join(", ")}\n`;
        }
        if (med.source) {
          responseMessage += `  Fuente: ${med.source}\n`;
        }
      });
    } else {
      responseMessage += "\n**No se encontraron detalles de medicamentos recomendados en nuestra base de datos.**\n";
    }
  } else {
    responseMessage += "\n**No hay medicamentos específicos recomendados para estos síntomas.**\n";
  }
  
  // Add self-care advice to response
  if (allSelfCareAdvice.length > 0) {
    responseMessage += "\n**Recomendaciones de autocuidado**:\n";
    allSelfCareAdvice.forEach(advice => {
      responseMessage += `- ${advice}\n`;
    });
  }
  
  // Add medical attention warning if needed
  if (shouldSeekMedicalAttention) {
    responseMessage += "\n⚠️ **Estos síntomas podrían requerir atención médica profesional. Considere consultar a un médico si los síntomas persisten o empeoran.**";
  }
  
  // Add general disclaimer
  responseMessage += `\n\n${getWarningMessage()}`;
  
  return {
    message: responseMessage.trim(),
    isEmergency: shouldSeekMedicalAttention,
    hasMedicalRecommendation: allMedicationIds.length > 0
  };
};

export const getInitialBotMessage = (): string => {
  return "Hola, soy MediBot, un asistente médico virtual. Puedo sugerir medicamentos de venta libre para síntomas comunes. ¿Cómo puedo ayudarte hoy? Por favor, describe tus síntomas con el mayor detalle posible.";
};
