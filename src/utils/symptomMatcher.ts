
import { findMatchingCategories, checkForEmergencySymptoms, getMedicationsByIds, getWarningMessage } from "../data/medicationsDB";

export interface BotResponse {
  message: string;
  isEmergency: boolean;
  hasMedicalRecommendation: boolean;
  recommendedActions?: string[];
}

export const processUserSymptoms = (userInput: string): BotResponse => {
  // Check for emergency symptoms first
  const isEmergency = checkForEmergencySymptoms(userInput);
  
  if (isEmergency) {
    return {
      message: "⚠️ EMERGENCIA MÉDICA: Los síntomas que describe pueden indicar una condición que requiere atención médica inmediata. Por favor contacte a servicios de emergencia o acuda al centro médico más cercano inmediatamente.",
      isEmergency: true,
      hasMedicalRecommendation: false,
      recommendedActions: ["Llamar a servicios de emergencia", "Acudir al hospital más cercano"]
    };
  }

  // Find matching symptom categories
  const matchingCategories = findMatchingCategories(userInput);
  
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
    responseMessage += `Causas posibles: ${category.possibleCauses.join(", ")}\n`;
    
    // Add medication recommendations if available
    if (category.recommendedMedications.length > 0) {
      category.recommendedMedications.forEach(medId => {
        if (!allMedicationIds.includes(medId)) {
          allMedicationIds.push(medId);
        }
      });
    }
    
    // Add self-care advice
    category.selfCareAdvice.forEach(advice => {
      if (!allSelfCareAdvice.includes(advice)) {
        allSelfCareAdvice.push(advice);
      }
    });
    
    // Check if medical attention is recommended
    if (category.seekMedicalAttention) {
      shouldSeekMedicalAttention = true;
    }
  });
  
  // Add medication details to response
  if (allMedicationIds.length > 0) {
    const recommendedMeds = getMedicationsByIds(allMedicationIds);
    responseMessage += "\n**Medicamentos de venta libre que podrían ayudar**:\n";
    
    recommendedMeds.forEach(med => {
      responseMessage += `- **${med.name}** (${med.activeIngredient}): ${med.dosage}\n`;
      responseMessage += `  Usado para: ${med.usedFor.join(", ")}\n`;
      if (med.contraindications.length > 0) {
        responseMessage += `  No usar si tiene: ${med.contraindications.join(", ")}\n`;
      }
    });
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
  return "Hola, soy MediBot, un asistente médico virtual. Puedo sugerir medicamentos de venta libre para síntomas comunes. ¿Cómo puedo ayudarte hoy? Por favor, describe tus síntomas.";
};
