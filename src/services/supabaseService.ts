
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
  
  const { data, error } = await supabase
    .from('medications')
    .select('*')
    .in('id', ids);
  
  if (error) {
    console.error('Error fetching medications by ids:', error);
    return [];
  }
  
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

// Buscar categorías de síntomas que coincidan con el texto de entrada del usuario
export async function findMatchingCategories(userInput: string): Promise<SymptomCategory[]> {
  const userInputLower = userInput.toLowerCase();
  
  // Obtener todas las categorías de síntomas
  const categories = await getAllSymptomCategories();
  
  // Filtrar categorías que coincidan con los síntomas del usuario
  return categories.filter(category => {
    // Verificar si alguno de los síntomas de la categoría está en el texto del usuario
    return category.symptoms.some(symptom => 
      userInputLower.includes(symptom.toLowerCase())
    );
  });
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
