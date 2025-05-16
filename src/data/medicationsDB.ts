
export interface Medication {
  id: string;
  name: string;
  activeIngredient: string;
  dosageForm: string;
  usedFor: string[];
  contraindications: string[];
  sideEffects: string[];
  dosage: string;
  source?: string; // Fuente de la información médica
}

export interface SymptomCategory {
  id: string;
  name: string;
  symptoms: string[];
  possibleCauses: string[];
  recommendedMedications: string[];
  selfCareAdvice: string[];
  seekMedicalAttention: boolean;
  source?: string; // Fuente de información
}

// Base de datos de medicamentos de venta libre con fuentes médicas confiables
export const medications: Medication[] = [
  {
    id: "med001",
    name: "Paracetamol",
    activeIngredient: "Acetaminophen",
    dosageForm: "Tablet",
    usedFor: ["headache", "fever", "minor pain", "body pain"],
    contraindications: ["severe liver disease", "alcohol consumption"],
    sideEffects: ["rare allergic reactions", "liver damage (at high doses)"],
    dosage: "Adults: 500-1000mg every 4-6 hours, maximum 4000mg daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med002",
    name: "Ibuprofen",
    activeIngredient: "Ibuprofen",
    dosageForm: "Tablet",
    usedFor: ["headache", "inflammation", "fever", "joint pain", "muscle pain"],
    contraindications: ["peptic ulcer", "heart failure", "renal failure", "pregnancy (third trimester)"],
    sideEffects: ["stomach irritation", "heartburn", "dizziness", "rash"],
    dosage: "Adults: 200-400mg every 4-6 hours, maximum 1200mg daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med003",
    name: "Loratadine",
    activeIngredient: "Loratadine",
    dosageForm: "Tablet",
    usedFor: ["allergies", "hay fever", "hives", "itching", "runny nose", "watery eyes"],
    contraindications: ["liver disease"],
    sideEffects: ["drowsiness", "dry mouth", "headache"],
    dosage: "Adults and children over 12: 10mg once daily",
    source: "FDA Approved Drug Information"
  },
  {
    id: "med004",
    name: "Omeprazole",
    activeIngredient: "Omeprazole",
    dosageForm: "Capsule",
    usedFor: ["heartburn", "acid reflux", "indigestion", "stomach acid"],
    contraindications: ["allergic to proton pump inhibitors"],
    sideEffects: ["headache", "diarrhea", "stomach pain", "nausea"],
    dosage: "Adults: 20mg once daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med005",
    name: "Loperamide",
    activeIngredient: "Loperamide Hydrochloride",
    dosageForm: "Capsule",
    usedFor: ["diarrhea"],
    contraindications: ["dysentery", "colitis", "bacterial intestinal infection"],
    sideEffects: ["constipation", "dizziness", "drowsiness", "dry mouth"],
    dosage: "Adults: 4mg initially, then 2mg after each loose stool, maximum 16mg daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med006",
    name: "Hydrocortisone cream",
    activeIngredient: "Hydrocortisone",
    dosageForm: "Cream",
    usedFor: ["skin irritation", "rashes", "eczema", "dermatitis", "itching", "insect bites"],
    contraindications: ["fungal skin infections", "acne", "rosacea"],
    sideEffects: ["skin thinning", "stretch marks", "skin color changes"],
    dosage: "Apply a thin layer to affected area 1-4 times daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med007",
    name: "Cetirizina",
    activeIngredient: "Cetirizine",
    dosageForm: "Tablet",
    usedFor: ["allergic rhinitis", "allergies", "hay fever", "hives", "itching"],
    contraindications: ["severe kidney disease"],
    sideEffects: ["drowsiness", "dry mouth", "fatigue", "headache"],
    dosage: "Adults and children over 6: 5-10mg once daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med008",
    name: "Bismuth subsalicylate",
    activeIngredient: "Bismuth subsalicylate",
    dosageForm: "Tablet",
    usedFor: ["diarrhea", "upset stomach", "indigestion", "nausea"],
    contraindications: ["bleeding disorders", "aspirin allergy"],
    sideEffects: ["darkened stool/tongue", "constipation", "ringing in ears"],
    dosage: "Adults: 2 tablets (524mg) every 30-60min as needed, max 8 doses/day",
    source: "FDA Approved Drug Information"
  },
  {
    id: "med009",
    name: "Difenhidramina",
    activeIngredient: "Diphenhydramine",
    dosageForm: "Tablet",
    usedFor: ["allergic reactions", "insomnia", "common cold symptoms", "itching"],
    contraindications: ["closed-angle glaucoma", "asthma", "urinary retention", "prostatic hypertrophy"],
    sideEffects: ["drowsiness", "dry mouth", "dizziness", "constipation"],
    dosage: "Adults: 25-50mg every 4-6 hours, maximum 300mg daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med010",
    name: "Meclizina",
    activeIngredient: "Meclizine",
    dosageForm: "Tablet",
    usedFor: ["motion sickness", "vertigo", "dizziness", "nausea"],
    contraindications: ["glaucoma"],
    sideEffects: ["drowsiness", "dry mouth", "blurred vision"],
    dosage: "Adults: 25-50mg 1 hour before travel, then every 24 hours as needed",
    source: "MedlinePlus.gov"
  },
  {
    id: "med011",
    name: "Famotidina",
    activeIngredient: "Famotidine",
    dosageForm: "Tablet",
    usedFor: ["heartburn", "acid indigestion", "stomach acid"],
    contraindications: ["kidney disease"],
    sideEffects: ["headache", "constipation", "diarrhea"],
    dosage: "Adults: 10-20mg as needed, maximum 2 tablets per day",
    source: "FDA Approved Drug Information"
  },
  {
    id: "med012",
    name: "Guaifenesin",
    activeIngredient: "Guaifenesin",
    dosageForm: "Syrup",
    usedFor: ["cough", "chest congestion", "mucus"],
    contraindications: ["persistent/chronic cough"],
    sideEffects: ["nausea", "vomiting", "stomach pain"],
    dosage: "Adults: 200-400mg every 4 hours, maximum 2400mg daily",
    source: "MedlinePlus.gov"
  },
  {
    id: "med013",
    name: "Pseudoefedrina",
    activeIngredient: "Pseudoephedrine",
    dosageForm: "Tablet",
    usedFor: ["nasal congestion", "sinus congestion", "stuffy nose"],
    contraindications: ["hypertension", "heart disease", "glaucoma", "hyperthyroidism"],
    sideEffects: ["nervousness", "insomnia", "dizziness", "increased blood pressure"],
    dosage: "Adults: 60mg every 4-6 hours, maximum 240mg daily",
    source: "MedlinePlus.gov"
  }
];

// Mapa de síntomas a categorías con información relacionada
export const symptomCategories: SymptomCategory[] = [
  {
    id: "cat001",
    name: "Headache",
    symptoms: ["headache", "migraine", "head pain", "temple pain", "pressure in head", "dolor de cabeza", "migraña", "cefalea"],
    possibleCauses: ["tension", "dehydration", "sinusitis", "lack of sleep", "stress", "eye strain"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest in a quiet, dark room",
      "Place a cool compress on your forehead",
      "Stay hydrated",
      "Practice relaxation techniques",
      "Maintain regular sleep schedule"
    ],
    seekMedicalAttention: false,
    source: "OMS"
  },
  {
    id: "cat002",
    name: "Allergy symptoms",
    symptoms: ["runny nose", "sneezing", "watery eyes", "itchy eyes", "itchy throat", "hay fever", "allergies", "alergia", "estornudos", "moqueo", "ojos llorosos"],
    possibleCauses: ["pollen", "dust mites", "pet dander", "mold", "certain foods"],
    recommendedMedications: ["med003", "med007", "med009"],
    selfCareAdvice: [
      "Avoid known allergens",
      "Use air purifiers",
      "Wash bedding regularly in hot water",
      "Shower after outdoor activities during high pollen seasons",
      "Keep windows closed during high pollen counts"
    ],
    seekMedicalAttention: false,
    source: "MedlinePlus.gov"
  },
  {
    id: "cat003",
    name: "Digestive issues",
    symptoms: ["heartburn", "indigestion", "acid reflux", "stomach pain", "stomach acid", "upset stomach", "acidez", "indigestión", "dolor de estómago", "reflujo"],
    possibleCauses: ["spicy food", "fatty food", "large meals", "lying down after eating", "stress"],
    recommendedMedications: ["med004", "med011"],
    selfCareAdvice: [
      "Eat smaller meals",
      "Avoid trigger foods",
      "Don't lie down right after eating",
      "Elevate the head of your bed",
      "Maintain a healthy weight"
    ],
    seekMedicalAttention: false,
    source: "MedlinePlus.gov"
  },
  {
    id: "cat004",
    name: "Diarrhea",
    symptoms: ["diarrhea", "loose stool", "watery stool", "frequent bowel movements", "diarrea", "heces sueltas", "heces acuosas"],
    possibleCauses: ["food poisoning", "virus", "bacteria", "food intolerance", "medication side effect"],
    recommendedMedications: ["med005", "med008"],
    selfCareAdvice: [
      "Stay hydrated",
      "Eat bland foods (BRAT diet: bananas, rice, applesauce, toast)",
      "Avoid dairy, caffeine, and high-fiber foods",
      "Avoid alcohol and sugary drinks",
      "Proper hand hygiene"
    ],
    seekMedicalAttention: false,
    source: "CDC"
  },
  {
    id: "cat005",
    name: "Skin irritation",
    symptoms: ["skin irritation", "rash", "eczema", "dermatitis", "itching", "itchy skin", "insect bite", "insect sting", "picazón", "sarpullido", "irritación cutánea", "picadura de insecto"],
    possibleCauses: ["allergic reaction", "insect bite", "contact with irritant", "dry skin", "heat", "sweat"],
    recommendedMedications: ["med006", "med009"],
    selfCareAdvice: [
      "Avoid scratching",
      "Apply cool compress",
      "Use mild, fragrance-free soaps",
      "Pat skin dry instead of rubbing",
      "Wear loose-fitting, breathable clothing"
    ],
    seekMedicalAttention: false,
    source: "American Academy of Dermatology"
  },
  {
    id: "cat006",
    name: "Fever",
    symptoms: ["fever", "high temperature", "chills", "sweating", "feeling hot", "fiebre", "temperatura alta", "escalofríos", "sudoración"],
    possibleCauses: ["infection", "inflammation", "heatstroke", "medication reaction"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest",
      "Stay hydrated",
      "Use light clothing and bedding",
      "Take lukewarm baths",
      "Monitor temperature regularly"
    ],
    seekMedicalAttention: true,
    source: "CDC"
  },
  {
    id: "cat007",
    name: "Muscle pain",
    symptoms: ["muscle pain", "soreness", "muscle ache", "stiffness", "body ache", "dolor muscular", "dolor corporal", "rigidez", "dolor de cuerpo"],
    possibleCauses: ["overexertion", "injury", "tension", "lack of movement", "viral infection"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest affected muscles",
      "Apply ice for acute pain, heat for chronic",
      "Gentle stretching",
      "Stay hydrated",
      "Consider magnesium supplements (consult healthcare provider)"
    ],
    seekMedicalAttention: false,
    source: "MedlinePlus.gov"
  },
  {
    id: "cat008",
    name: "Emergency conditions",
    symptoms: [
      "chest pain", "difficulty breathing", "severe abdominal pain", "sudden severe headache", 
      "loss of consciousness", "severe bleeding", "seizure", "stroke symptoms",
      "face drooping", "arm weakness", "speech difficulty", "sudden confusion",
      "severe allergic reaction", "anaphylaxis", "swelling of face, lips or throat",
      "dolor en el pecho", "dificultad para respirar", "dolor abdominal intenso",
      "dolor de cabeza repentino y severo", "pérdida de conciencia", "sangrado severo",
      "convulsiones", "síntomas de derrame cerebral", "reacción alérgica severa"
    ],
    possibleCauses: ["heart attack", "stroke", "severe infection", "trauma", "severe allergic reaction"],
    recommendedMedications: [],
    selfCareAdvice: ["Seek immediate medical attention or call emergency services"],
    seekMedicalAttention: true,
    source: "American Heart Association"
  },
  {
    id: "cat009",
    name: "Cold symptoms",
    symptoms: ["cold", "common cold", "runny nose", "stuffy nose", "sore throat", "cough", "sneezing", "resfriado", "resfriado común", "nariz congestionada", "dolor de garganta", "tos"],
    possibleCauses: ["viral infection", "rhinovirus", "coronavirus", "influenza", "seasonal changes"],
    recommendedMedications: ["med001", "med012", "med013"],
    selfCareAdvice: [
      "Rest and stay warm",
      "Drink plenty of fluids",
      "Use saline nasal spray",
      "Gargle with warm salt water for sore throat",
      "Use humidifier to add moisture to the air"
    ],
    seekMedicalAttention: false,
    source: "CDC"
  },
  {
    id: "cat010",
    name: "Motion sickness",
    symptoms: ["motion sickness", "travel sickness", "nausea while traveling", "dizziness while traveling", "mareo por movimiento", "mareo en viajes", "náuseas al viajar"],
    possibleCauses: ["sensory conflict", "car travel", "boat travel", "air travel", "amusement rides"],
    recommendedMedications: ["med010"],
    selfCareAdvice: [
      "Look at the horizon or fixed point",
      "Avoid reading while traveling",
      "Sit in areas with less motion (front seat of car, over wing on plane)",
      "Fresh air can help",
      "Avoid heavy meals before travel"
    ],
    seekMedicalAttention: false,
    source: "MedlinePlus.gov"
  },
  {
    id: "cat011",
    name: "Nasal congestion",
    symptoms: ["nasal congestion", "stuffy nose", "blocked nose", "sinus pressure", "congestión nasal", "nariz tapada", "presión sinusal"],
    possibleCauses: ["common cold", "allergies", "sinusitis", "flu", "environmental irritants"],
    recommendedMedications: ["med013"],
    selfCareAdvice: [
      "Use saline nasal spray",
      "Apply warm compress over nose and forehead",
      "Use humidifier or steam inhalation",
      "Stay hydrated",
      "Elevate head while sleeping"
    ],
    seekMedicalAttention: false,
    source: "American Academy of Otolaryngology"
  }
];

export const getWarningMessage = (): string => {
  return "IMPORTANTE: Este chatbot proporciona información general y sugerencias para síntomas leves. No es un sustituto de consejo médico profesional, diagnóstico o tratamiento. Siempre consulte con un profesional de la salud para problemas médicos. En caso de emergencia, contacte a servicios de emergencia inmediatamente.";
};

// Get medications by ID
export const getMedicationsByIds = (ids: string[]): Medication[] => {
  return medications.filter(med => ids.includes(med.id));
};

// Find categories that match the given symptoms
export const findMatchingCategories = (userInput: string): SymptomCategory[] => {
  const inputLower = userInput.toLowerCase();
  
  // Método mejorado para encontrar coincidencias de síntomas
  // Primero buscamos coincidencias exactas
  let matchingCategories = symptomCategories.filter(category => {
    return category.symptoms.some(symptom => inputLower.includes(symptom));
  });

  // Si no hay coincidencias exactas, buscamos coincidencias parciales
  if (matchingCategories.length === 0) {
    const words = inputLower.split(/\s+/);
    matchingCategories = symptomCategories.filter(category => {
      return category.symptoms.some(symptom => 
        words.some(word => word.length > 3 && symptom.includes(word))
      );
    });
  }
  
  return matchingCategories;
};

// Emergency symptoms check
export const checkForEmergencySymptoms = (userInput: string): boolean => {
  const emergencyCategory = symptomCategories.find(cat => cat.id === "cat008");
  if (!emergencyCategory) return false;
  
  const inputLower = userInput.toLowerCase();
  return emergencyCategory.symptoms.some(symptom => inputLower.includes(symptom));
};
