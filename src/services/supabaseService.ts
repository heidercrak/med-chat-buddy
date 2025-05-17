
import { supabase } from '@/integrations/supabase/client';

// Tipo para la estructura de Medicamentos
export interface Medication {
  id: string;
  name: string;
  active_ingredient: string;
  dosage_form: string;
  used_for: string[];
  contraindications: string[];
  side_effects: string[];
  dosage: string;
  source?: string;
}

// Tipo para la estructura de Categorías de Síntomas
export interface SymptomCategory {
  id: string;
  name: string;
  symptoms: string[];
  possible_causes: string[];
  recommended_medications: string[];
  self_care_advice: string[];
  seek_medical_attention: boolean;
  source?: string;
}

// Obtener todos los medicamentos
export async function getAllMedications(): Promise<Medication[]> {
  const { data, error } = await supabase
    .from('medications')
    .select('*');
  
  if (error) {
    console.error('Error fetching medications:', error);
    return [];
  }
  
  return data || [];
}

// Obtener medicamentos por ID
export async function getMedicationsByIds(ids: string[]): Promise<Medication[]> {
  if (!ids || ids.length === 0) return [];
  
  console.log("Buscando medicamentos con IDs:", ids);
  
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .in('id', ids);
  
  if (error) {
    console.error('Error fetching medications by ids:', error);
    return [];
  }
  
  console.log("Medicamentos encontrados:", data ? data.length : 0);
  return data || [];
}

// Obtener todas las categorías de síntomas
export async function getAllSymptomCategories(): Promise<SymptomCategory[]> {
  const { data, error } = await supabase
    .from('symptom_categories')
    .select('*');
  
  if (error) {
    console.error('Error fetching symptom categories:', error);
    return [];
  }
  
  return data || [];
}

// Normalizar texto para comparaciones (elimina acentos, convierte a minúsculas)
function normalizeText(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Buscar categorías de síntomas que coincidan con el texto de entrada del usuario
export async function findMatchingCategories(userInput: string): Promise<SymptomCategory[]> {
  const userInputNormalized = normalizeText(userInput);
  console.log("Texto de usuario normalizado:", userInputNormalized);
  
  // Obtener todas las categorías de síntomas
  const { data: categories, error } = await supabase
    .from('symptom_categories')
    .select('*');
  
  if (error) {
    console.error('Error fetching symptom categories:', error);
    return [];
  }
  
  if (!categories || categories.length === 0) {
    console.log("No se encontraron categorías de síntomas");
    return [];
  }
  
  console.log(`Buscando coincidencias en ${categories.length} categorías`);
  
  // Filtrar categorías que coincidan con los síntomas del usuario
  const matchingCategories = categories.filter(category => {
    // Verificar si alguno de los síntomas de la categoría está en el texto del usuario
    const hasMatch = category.symptoms.some(symptom => {
      const normalizedSymptom = normalizeText(symptom);
      const isMatch = userInputNormalized.includes(normalizedSymptom);
      if (isMatch) {
        console.log(`Coincidencia encontrada: "${symptom}" en categoría "${category.name}"`);
      }
      return isMatch;
    });
    
    return hasMatch;
  });
  
  console.log(`Se encontraron ${matchingCategories.length} categorías coincidentes`);
  
  // Si no hay coincidencias exactas, buscar coincidencias parciales por palabras
  if (matchingCategories.length === 0) {
    console.log("Buscando coincidencias parciales por palabras");
    const words = userInputNormalized.split(/\s+/);
    
    const partialMatches = categories.filter(category => {
      return category.symptoms.some(symptom => {
        const normalizedSymptom = normalizeText(symptom);
        return words.some(word => {
          // Solo considerar palabras con longitud significativa
          if (word.length < 4) return false;
          const isPartialMatch = normalizedSymptom.includes(word);
          if (isPartialMatch) {
            console.log(`Coincidencia parcial: palabra "${word}" en síntoma "${symptom}" de categoría "${category.name}"`);
          }
          return isPartialMatch;
        });
      });
    });
    
    console.log(`Se encontraron ${partialMatches.length} coincidencias parciales`);
    return partialMatches;
  }
  
  return matchingCategories;
}

// Verificar si hay síntomas de emergencia en el texto del usuario
export async function checkForEmergencySymptoms(userInput: string): Promise<boolean> {
  const emergencySymptoms = [
    'desmayo', 'inconsciente', 'no responde', 'ataque cardíaco', 'infarto', 
    'dificultad para respirar', 'no puede respirar', 'asfixia', 'convulsión', 
    'sangrado severo', 'sangrado incontrolable', 'dolor de pecho severo',
    'herida profunda', 'sobredosis', 'envenenamiento', 'suicidio'
  ];

  const userInputLower = userInput.toLowerCase();
  
  return emergencySymptoms.some(symptom => 
    userInputLower.includes(symptom.toLowerCase())
  );
}

// Obtener mensaje de advertencia general
export function getWarningMessage(): string {
  return "Esta información es solo para fines educativos y no sustituye el consejo médico profesional. Si sus síntomas persisten o son graves, consulte a un profesional de la salud.";
}
