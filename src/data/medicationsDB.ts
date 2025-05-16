
export interface Medication {
  id: string;
  name: string;
  activeIngredient: string;
  dosageForm: string;
  usedFor: string[];
  contraindications: string[];
  sideEffects: string[];
  dosage: string;
}

export interface SymptomCategory {
  id: string;
  name: string;
  symptoms: string[];
  possibleCauses: string[];
  recommendedMedications: string[];
  selfCareAdvice: string[];
  seekMedicalAttention: boolean;
}

// Sample database of over-the-counter medications
export const medications: Medication[] = [
  {
    id: "med001",
    name: "Paracetamol",
    activeIngredient: "Acetaminophen",
    dosageForm: "Tablet",
    usedFor: ["headache", "fever", "minor pain", "body pain"],
    contraindications: ["severe liver disease", "alcohol consumption"],
    sideEffects: ["rare allergic reactions", "liver damage (at high doses)"],
    dosage: "Adults: 500-1000mg every 4-6 hours, maximum 4000mg daily"
  },
  {
    id: "med002",
    name: "Ibuprofen",
    activeIngredient: "Ibuprofen",
    dosageForm: "Tablet",
    usedFor: ["headache", "inflammation", "fever", "joint pain", "muscle pain"],
    contraindications: ["peptic ulcer", "heart failure", "renal failure", "pregnancy (third trimester)"],
    sideEffects: ["stomach irritation", "heartburn", "dizziness", "rash"],
    dosage: "Adults: 200-400mg every 4-6 hours, maximum 1200mg daily"
  },
  {
    id: "med003",
    name: "Loratadine",
    activeIngredient: "Loratadine",
    dosageForm: "Tablet",
    usedFor: ["allergies", "hay fever", "hives", "itching", "runny nose", "watery eyes"],
    contraindications: ["liver disease"],
    sideEffects: ["drowsiness", "dry mouth", "headache"],
    dosage: "Adults and children over 12: 10mg once daily"
  },
  {
    id: "med004",
    name: "Omeprazole",
    activeIngredient: "Omeprazole",
    dosageForm: "Capsule",
    usedFor: ["heartburn", "acid reflux", "indigestion", "stomach acid"],
    contraindications: ["allergic to proton pump inhibitors"],
    sideEffects: ["headache", "diarrhea", "stomach pain", "nausea"],
    dosage: "Adults: 20mg once daily"
  },
  {
    id: "med005",
    name: "Loperamide",
    activeIngredient: "Loperamide Hydrochloride",
    dosageForm: "Capsule",
    usedFor: ["diarrhea"],
    contraindications: ["dysentery", "colitis", "bacterial intestinal infection"],
    sideEffects: ["constipation", "dizziness", "drowsiness", "dry mouth"],
    dosage: "Adults: 4mg initially, then 2mg after each loose stool, maximum 16mg daily"
  },
  {
    id: "med006",
    name: "Hydrocortisone cream",
    activeIngredient: "Hydrocortisone",
    dosageForm: "Cream",
    usedFor: ["skin irritation", "rashes", "eczema", "dermatitis", "itching", "insect bites"],
    contraindications: ["fungal skin infections", "acne", "rosacea"],
    sideEffects: ["skin thinning", "stretch marks", "skin color changes"],
    dosage: "Apply a thin layer to affected area 1-4 times daily"
  }
];

// Map of symptoms to categories with related information
export const symptomCategories: SymptomCategory[] = [
  {
    id: "cat001",
    name: "Headache",
    symptoms: ["headache", "migraine", "head pain", "temple pain", "pressure in head"],
    possibleCauses: ["tension", "dehydration", "sinusitis", "lack of sleep", "stress", "eye strain"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest in a quiet, dark room",
      "Place a cool compress on your forehead",
      "Stay hydrated",
      "Practice relaxation techniques",
      "Maintain regular sleep schedule"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat002",
    name: "Allergy symptoms",
    symptoms: ["runny nose", "sneezing", "watery eyes", "itchy eyes", "itchy throat", "hay fever", "allergies"],
    possibleCauses: ["pollen", "dust mites", "pet dander", "mold", "certain foods"],
    recommendedMedications: ["med003"],
    selfCareAdvice: [
      "Avoid known allergens",
      "Use air purifiers",
      "Wash bedding regularly in hot water",
      "Shower after outdoor activities during high pollen seasons",
      "Keep windows closed during high pollen counts"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat003",
    name: "Digestive issues",
    symptoms: ["heartburn", "indigestion", "acid reflux", "stomach pain", "stomach acid", "upset stomach"],
    possibleCauses: ["spicy food", "fatty food", "large meals", "lying down after eating", "stress"],
    recommendedMedications: ["med004"],
    selfCareAdvice: [
      "Eat smaller meals",
      "Avoid trigger foods",
      "Don't lie down right after eating",
      "Elevate the head of your bed",
      "Maintain a healthy weight"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat004",
    name: "Diarrhea",
    symptoms: ["diarrhea", "loose stool", "watery stool", "frequent bowel movements"],
    possibleCauses: ["food poisoning", "virus", "bacteria", "food intolerance", "medication side effect"],
    recommendedMedications: ["med005"],
    selfCareAdvice: [
      "Stay hydrated",
      "Eat bland foods (BRAT diet: bananas, rice, applesauce, toast)",
      "Avoid dairy, caffeine, and high-fiber foods",
      "Avoid alcohol and sugary drinks",
      "Proper hand hygiene"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat005",
    name: "Skin irritation",
    symptoms: ["skin irritation", "rash", "eczema", "dermatitis", "itching", "itchy skin", "insect bite", "insect sting"],
    possibleCauses: ["allergic reaction", "insect bite", "contact with irritant", "dry skin", "heat", "sweat"],
    recommendedMedications: ["med006"],
    selfCareAdvice: [
      "Avoid scratching",
      "Apply cool compress",
      "Use mild, fragrance-free soaps",
      "Pat skin dry instead of rubbing",
      "Wear loose-fitting, breathable clothing"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat006",
    name: "Fever",
    symptoms: ["fever", "high temperature", "chills", "sweating", "feeling hot"],
    possibleCauses: ["infection", "inflammation", "heatstroke", "medication reaction"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest",
      "Stay hydrated",
      "Use light clothing and bedding",
      "Take lukewarm baths",
      "Monitor temperature regularly"
    ],
    seekMedicalAttention: true
  },
  {
    id: "cat007",
    name: "Muscle pain",
    symptoms: ["muscle pain", "soreness", "muscle ache", "stiffness", "body ache"],
    possibleCauses: ["overexertion", "injury", "tension", "lack of movement", "viral infection"],
    recommendedMedications: ["med001", "med002"],
    selfCareAdvice: [
      "Rest affected muscles",
      "Apply ice for acute pain, heat for chronic",
      "Gentle stretching",
      "Stay hydrated",
      "Consider magnesium supplements (consult healthcare provider)"
    ],
    seekMedicalAttention: false
  },
  {
    id: "cat008",
    name: "Emergency conditions",
    symptoms: [
      "chest pain", "difficulty breathing", "severe abdominal pain", "sudden severe headache", 
      "loss of consciousness", "severe bleeding", "seizure", "stroke symptoms",
      "face drooping", "arm weakness", "speech difficulty", "sudden confusion",
      "severe allergic reaction", "anaphylaxis", "swelling of face, lips or throat"
    ],
    possibleCauses: ["heart attack", "stroke", "severe infection", "trauma", "severe allergic reaction"],
    recommendedMedications: [],
    selfCareAdvice: ["Seek immediate medical attention or call emergency services"],
    seekMedicalAttention: true
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
  
  return symptomCategories.filter(category => {
    return category.symptoms.some(symptom => inputLower.includes(symptom));
  });
};

// Emergency symptoms check
export const checkForEmergencySymptoms = (userInput: string): boolean => {
  const emergencyCategory = symptomCategories.find(cat => cat.id === "cat008");
  if (!emergencyCategory) return false;
  
  const inputLower = userInput.toLowerCase();
  return emergencyCategory.symptoms.some(symptom => inputLower.includes(symptom));
};
