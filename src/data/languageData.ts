export interface Word {
  id: string;
  native: string;
  pronunciation: string;
  meaning: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Language {
  id: string;
  name: string;
  native: string;
  script: string;
  words: Word[];
}

export const languageData: Language[] = [
  {
    id: "hindi",
    name: "Hindi",
    native: "हिन्दी",
    script: "Devanagari",
    words: [
      // Greetings & Basic
      { id: "h1", native: "नमस्ते", pronunciation: "Namaste", meaning: "Hello/Goodbye", category: "greetings", difficulty: "easy" },
      { id: "h2", native: "धन्यवाद", pronunciation: "Dhanyawad", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "h3", native: "माफ़ करें", pronunciation: "Maaf karein", meaning: "Excuse me/Sorry", category: "greetings", difficulty: "easy" },
      { id: "h4", native: "कृपया", pronunciation: "Kripaya", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "h5", native: "हाँ", pronunciation: "Haan", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "h6", native: "नहीं", pronunciation: "Nahin", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "h7", native: "माता", pronunciation: "Mata", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "h8", native: "पिता", pronunciation: "Pita", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "h9", native: "भाई", pronunciation: "Bhai", meaning: "Brother", category: "family", difficulty: "easy" },
      { id: "h10", native: "बहन", pronunciation: "Behen", meaning: "Sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "h11", native: "पानी", pronunciation: "Paani", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "h12", native: "खाना", pronunciation: "Khaana", meaning: "Food", category: "food", difficulty: "easy" },
      { id: "h13", native: "चाय", pronunciation: "Chai", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "h14", native: "दूध", pronunciation: "Doodh", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "h15", native: "रोटी", pronunciation: "Roti", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "h16", native: "एक", pronunciation: "Ek", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "h17", native: "दो", pronunciation: "Do", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "h18", native: "तीन", pronunciation: "Teen", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "h19", native: "चार", pronunciation: "Char", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "h20", native: "पाँच", pronunciation: "Paanch", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "h21", native: "लाल", pronunciation: "Laal", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "h22", native: "नीला", pronunciation: "Neela", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "h23", native: "हरा", pronunciation: "Hara", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "h24", native: "पीला", pronunciation: "Peela", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "h25", native: "काला", pronunciation: "Kaala", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "h26", native: "सिर", pronunciation: "Sir", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "h27", native: "आँख", pronunciation: "Aankh", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "h28", native: "हाथ", pronunciation: "Haath", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "h29", native: "पैर", pronunciation: "Pair", meaning: "Foot/Leg", category: "body", difficulty: "medium" },
      { id: "h30", native: "मुँह", pronunciation: "Munh", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "h31", native: "दिन", pronunciation: "Din", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "h32", native: "रात", pronunciation: "Raat", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "h33", native: "सुबह", pronunciation: "Subah", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "h34", native: "शाम", pronunciation: "Shaam", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "h35", native: "समय", pronunciation: "Samay", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "h36", native: "घर", pronunciation: "Ghar", meaning: "House/Home", category: "places", difficulty: "medium" },
      { id: "h37", native: "स्कूल", pronunciation: "School", meaning: "School", category: "places", difficulty: "medium" },
      { id: "h38", native: "बाज़ार", pronunciation: "Bazaar", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "h39", native: "अस्पताल", pronunciation: "Aspatal", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "h40", native: "मंदिर", pronunciation: "Mandir", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "h41", native: "जाना", pronunciation: "Jaana", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "h42", native: "आना", pronunciation: "Aana", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "h43", native: "खाना", pronunciation: "Khaana", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "h44", native: "पीना", pronunciation: "Peena", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "h45", native: "सोना", pronunciation: "Sona", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "h46", native: "धूप", pronunciation: "Dhoop", meaning: "Sunshine", category: "weather", difficulty: "medium" },
      { id: "h47", native: "बारिश", pronunciation: "Baarish", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "h48", native: "हवा", pronunciation: "Hawa", meaning: "Wind", category: "weather", difficulty: "medium" },
      { id: "h49", native: "बर्फ", pronunciation: "Barf", meaning: "Snow", category: "weather", difficulty: "medium" },
      { id: "h50", native: "गर्म", pronunciation: "Garm", meaning: "Hot", category: "weather", difficulty: "medium" },
      { id: "h51", native: "ठंडा", pronunciation: "Thanda", meaning: "Cold", category: "weather", difficulty: "medium" },
      { id: "h52", native: "मौसम", pronunciation: "Mausam", meaning: "Weather", category: "weather", difficulty: "medium" }
    ]
  },
  {
    id: "kannada",
    name: "Kannada",
    native: "ಕನ್ನಡ",
    script: "Kannada",
    words: [
      // Greetings & Basic
      { id: "k1", native: "ನಮಸ್ಕಾರ", pronunciation: "Namaskara", meaning: "Hello", category: "greetings", difficulty: "easy" },
      { id: "k2", native: "ಧನ್ಯವಾದ", pronunciation: "Dhanyavada", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "k3", native: "ಕ್ಷಮಿಸಿ", pronunciation: "Kshemisi", meaning: "Sorry", category: "greetings", difficulty: "easy" },
      { id: "k4", native: "ದಯವಿಟ್ಟು", pronunciation: "Dayavittu", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "k5", native: "ಹೌದು", pronunciation: "Haudu", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "k6", native: "ಇಲ್ಲ", pronunciation: "Illa", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "k7", native: "ಅಮ್ಮ", pronunciation: "Amma", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "k8", native: "ಅಪ್ಪ", pronunciation: "Appa", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "k9", native: "ಅಣ್ಣ", pronunciation: "Anna", meaning: "Elder brother", category: "family", difficulty: "easy" },
      { id: "k10", native: "ಅಕ್ಕ", pronunciation: "Akka", meaning: "Elder sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "k11", native: "ನೀರು", pronunciation: "Neeru", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "k12", native: "ಅನ್ನ", pronunciation: "Anna", meaning: "Rice", category: "food", difficulty: "easy" },
      { id: "k13", native: "ಚಹಾ", pronunciation: "Chaha", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "k14", native: "ಹಾಲು", pronunciation: "Haalu", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "k15", native: "ರೊಟ್ಟಿ", pronunciation: "Rotti", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "k16", native: "ಒಂದು", pronunciation: "Ondu", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "k17", native: "ಎರಡು", pronunciation: "Eradu", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "k18", native: "ಮೂರು", pronunciation: "Mooru", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "k19", native: "ನಾಲ್ಕು", pronunciation: "Naalku", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "k20", native: "ಐದು", pronunciation: "Aidu", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "k21", native: "ಕೆಂಪು", pronunciation: "Kempu", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "k22", native: "ನೀಲಿ", pronunciation: "Neeli", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "k23", native: "ಹಸಿರು", pronunciation: "Hasiru", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "k24", native: "ಹಳದಿ", pronunciation: "Haladi", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "k25", native: "ಕಪ್ಪು", pronunciation: "Kappu", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "k26", native: "ತಲೆ", pronunciation: "Tale", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "k27", native: "ಕಣ್ಣು", pronunciation: "Kannu", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "k28", native: "ಕೈ", pronunciation: "Kai", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "k29", native: "ಕಾಲು", pronunciation: "Kaalu", meaning: "Leg", category: "body", difficulty: "medium" },
      { id: "k30", native: "ಬಾಯಿ", pronunciation: "Baayi", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "k31", native: "ದಿನ", pronunciation: "Dina", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "k32", native: "ರಾತ್ರಿ", pronunciation: "Raatri", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "k33", native: "ಬೆಳಿಗ್ಗೆ", pronunciation: "Beligge", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "k34", native: "ಸಂಜೆ", pronunciation: "Sanje", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "k35", native: "ಸಮಯ", pronunciation: "Samaya", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "k36", native: "ಮನೆ", pronunciation: "Mane", meaning: "House", category: "places", difficulty: "medium" },
      { id: "k37", native: "ಶಾಲೆ", pronunciation: "Shaale", meaning: "School", category: "places", difficulty: "medium" },
      { id: "k38", native: "ಮಾರುಕಟ್ಟೆ", pronunciation: "Maarukatte", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "k39", native: "ಆಸ್ಪತ್ರೆ", pronunciation: "Aaspatre", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "k40", native: "ದೇವಸ್ಥಾನ", pronunciation: "Devasthaana", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "k41", native: "ಹೋಗು", pronunciation: "Hogu", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "k42", native: "ಬರು", pronunciation: "Baru", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "k43", native: "ತಿನ್ನು", pronunciation: "Tinnu", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "k44", native: "ಕುಡಿ", pronunciation: "Kudi", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "k45", native: "ಮಲಗು", pronunciation: "Malagu", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "k46", native: "ಬಿಸಿಲು", pronunciation: "Bisilu", meaning: "Sunshine", category: "weather", difficulty: "medium" },
      { id: "k47", native: "ಮಳೆ", pronunciation: "Male", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "k48", native: "ಗಾಳಿ", pronunciation: "Gaali", meaning: "Wind", category: "weather", difficulty: "medium" },
      { id: "k49", native: "ಹಿಮ", pronunciation: "Hima", meaning: "Snow", category: "weather", difficulty: "medium" },
      { id: "k50", native: "ಬಿಸಿ", pronunciation: "Bisi", meaning: "Hot", category: "weather", difficulty: "medium" }
    ]
  },
  {
    id: "marathi",
    name: "Marathi",
    native: "मराठी",
    script: "Devanagari",
    words: [
      // Greetings & Basic
      { id: "m1", native: "नमस्कार", pronunciation: "Namaskar", meaning: "Hello", category: "greetings", difficulty: "easy" },
      { id: "m2", native: "धन्यवाद", pronunciation: "Dhanyawad", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "m3", native: "माफ करा", pronunciation: "Maaf kara", meaning: "Sorry", category: "greetings", difficulty: "easy" },
      { id: "m4", native: "कृपया", pronunciation: "Kripaya", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "m5", native: "होय", pronunciation: "Hoy", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "m6", native: "नाही", pronunciation: "Naahi", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "m7", native: "आई", pronunciation: "Aai", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "m8", native: "बाबा", pronunciation: "Baba", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "m9", native: "भाऊ", pronunciation: "Bhau", meaning: "Brother", category: "family", difficulty: "easy" },
      { id: "m10", native: "बहीण", pronunciation: "Baheen", meaning: "Sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "m11", native: "पाणी", pronunciation: "Paani", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "m12", native: "जेवण", pronunciation: "Jevan", meaning: "Food", category: "food", difficulty: "easy" },
      { id: "m13", native: "चहा", pronunciation: "Chaha", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "m14", native: "दूध", pronunciation: "Doodh", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "m15", native: "भाकरी", pronunciation: "Bhaakri", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "m16", native: "एक", pronunciation: "Ek", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "m17", native: "दोन", pronunciation: "Don", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "m18", native: "तीन", pronunciation: "Teen", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "m19", native: "चार", pronunciation: "Char", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "m20", native: "पाच", pronunciation: "Paach", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "m21", native: "लाल", pronunciation: "Laal", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "m22", native: "निळा", pronunciation: "Nilaa", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "m23", native: "हिरवा", pronunciation: "Hirvaa", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "m24", native: "पिवळा", pronunciation: "Pivlaa", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "m25", native: "काळा", pronunciation: "Kaalaa", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "m26", native: "डोके", pronunciation: "Doke", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "m27", native: "डोळा", pronunciation: "Dolaa", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "m28", native: "हात", pronunciation: "Haat", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "m29", native: "पाय", pronunciation: "Paay", meaning: "Leg", category: "body", difficulty: "medium" },
      { id: "m30", native: "तोंड", pronunciation: "Tond", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "m31", native: "दिवस", pronunciation: "Divas", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "m32", native: "रात्र", pronunciation: "Raatra", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "m33", native: "सकाळ", pronunciation: "Sakaal", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "m34", native: "संध्याकाळ", pronunciation: "Sandhyakaal", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "m35", native: "वेळ", pronunciation: "Vel", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "m36", native: "घर", pronunciation: "Ghar", meaning: "House", category: "places", difficulty: "medium" },
      { id: "m37", native: "शाळा", pronunciation: "Shaalaa", meaning: "School", category: "places", difficulty: "medium" },
      { id: "m38", native: "बाजार", pronunciation: "Baajaar", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "m39", native: "रुग्णालय", pronunciation: "Rugnalay", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "m40", native: "मंदिर", pronunciation: "Mandir", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "m41", native: "जाणे", pronunciation: "Jaane", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "m42", native: "येणे", pronunciation: "Yene", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "m43", native: "खाणे", pronunciation: "Khaane", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "m44", native: "पिणे", pronunciation: "Pine", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "m45", native: "झोपणे", pronunciation: "Zhopne", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "m46", native: "उन्हाळा", pronunciation: "Unhaala", meaning: "Summer", category: "weather", difficulty: "medium" },
      { id: "m47", native: "पाऊस", pronunciation: "Paaus", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "m48", native: "वारा", pronunciation: "Vaara", meaning: "Wind", category: "weather", difficulty: "medium" }
    ]
  },
  {
    id: "tamil",
    name: "Tamil",
    native: "தமிழ்",
    script: "Tamil",
    words: [
      // Greetings & Basic
      { id: "t1", native: "வணக்கம்", pronunciation: "Vanakkam", meaning: "Hello", category: "greetings", difficulty: "easy" },
      { id: "t2", native: "நன்றி", pronunciation: "Nandri", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "t3", native: "மன்னிக்கவும்", pronunciation: "Mannikkavum", meaning: "Sorry", category: "greetings", difficulty: "easy" },
      { id: "t4", native: "தயவுசெய்து", pronunciation: "Thayavu seithu", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "t5", native: "ஆம்", pronunciation: "Aam", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "t6", native: "இல்லை", pronunciation: "Illai", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "t7", native: "அம்மா", pronunciation: "Amma", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "t8", native: "அப்பா", pronunciation: "Appa", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "t9", native: "அண்ணன்", pronunciation: "Annan", meaning: "Elder brother", category: "family", difficulty: "easy" },
      { id: "t10", native: "அக்காள்", pronunciation: "Akkaal", meaning: "Elder sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "t11", native: "தண்ணீர்", pronunciation: "Thanneer", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "t12", native: "சாதம்", pronunciation: "Saatham", meaning: "Rice", category: "food", difficulty: "easy" },
      { id: "t13", native: "தேநீர்", pronunciation: "Theneer", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "t14", native: "பால்", pronunciation: "Paal", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "t15", native: "ரொட்டி", pronunciation: "Rotti", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "t16", native: "ஒன்று", pronunciation: "Ondru", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "t17", native: "இரண்டு", pronunciation: "Irandu", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "t18", native: "மூன்று", pronunciation: "Moondru", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "t19", native: "நான்கு", pronunciation: "Naangu", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "t20", native: "ஐந்து", pronunciation: "Ainthu", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "t21", native: "சிவப்பு", pronunciation: "Sivappu", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "t22", native: "நீலம்", pronunciation: "Neelam", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "t23", native: "பச்சை", pronunciation: "Pacchai", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "t24", native: "மஞ்சள்", pronunciation: "Manjal", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "t25", native: "கருப்பு", pronunciation: "Karuppu", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "t26", native: "தலை", pronunciation: "Thalai", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "t27", native: "கண்", pronunciation: "Kan", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "t28", native: "கை", pronunciation: "Kai", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "t29", native: "கால்", pronunciation: "Kaal", meaning: "Leg", category: "body", difficulty: "medium" },
      { id: "t30", native: "வாய்", pronunciation: "Vaai", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "t31", native: "நாள்", pronunciation: "Naal", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "t32", native: "இரவு", pronunciation: "Iravu", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "t33", native: "காலை", pronunciation: "Kaalai", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "t34", native: "மாலை", pronunciation: "Maalai", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "t35", native: "நேரம்", pronunciation: "Neram", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "t36", native: "வீடு", pronunciation: "Veedu", meaning: "House", category: "places", difficulty: "medium" },
      { id: "t37", native: "பள்ளி", pronunciation: "Palli", meaning: "School", category: "places", difficulty: "medium" },
      { id: "t38", native: "சந்தை", pronunciation: "Santhai", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "t39", native: "மருத்துவமனை", pronunciation: "Maruthuvamanai", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "t40", native: "கோயில்", pronunciation: "Koyil", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "t41", native: "போக", pronunciation: "Poga", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "t42", native: "வர", pronunciation: "Vara", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "t43", native: "சாப்பிட", pronunciation: "Saappida", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "t44", native: "குடிக்க", pronunciation: "Kudikka", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "t45", native: "தூங்க", pronunciation: "Thoonga", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "t46", native: "வெயில்", pronunciation: "Veyil", meaning: "Sunshine", category: "weather", difficulty: "medium" },
      { id: "t47", native: "மழை", pronunciation: "Mazhai", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "t48", native: "காற்று", pronunciation: "Kaatru", meaning: "Wind", category: "weather", difficulty: "medium" },
      { id: "t49", native: "பனி", pronunciation: "Pani", meaning: "Snow", category: "weather", difficulty: "medium" },
      { id: "t50", native: "வெப்பம்", pronunciation: "Veppam", meaning: "Hot", category: "weather", difficulty: "medium" },
      { id: "t51", native: "குளிர்", pronunciation: "Kulir", meaning: "Cold", category: "weather", difficulty: "medium" },
      { id: "t52", native: "வானிலை", pronunciation: "Vaanilai", meaning: "Weather", category: "weather", difficulty: "medium" },
      { id: "t53", native: "சூரியன்", pronunciation: "Sooryan", meaning: "Sun", category: "weather", difficulty: "medium" },
      { id: "t54", native: "நிலா", pronunciation: "Nilaa", meaning: "Moon", category: "weather", difficulty: "medium" },
      { id: "t55", native: "நட்சத்திரம்", pronunciation: "Natchathiram", meaning: "Star", category: "weather", difficulty: "medium" }
    ]
  },
  {
    id: "telugu",
    name: "Telugu",
    native: "తెలుగు",
    script: "Telugu",
    words: [
      // Greetings & Basic
      { id: "te1", native: "నమస్కారం", pronunciation: "Namaskaram", meaning: "Hello", category: "greetings", difficulty: "easy" },
      { id: "te2", native: "ధన్యవాదాలు", pronunciation: "Dhanyavadalu", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "te3", native: "క్షమించండి", pronunciation: "Kshaminchandhi", meaning: "Sorry", category: "greetings", difficulty: "easy" },
      { id: "te4", native: "దయచేసి", pronunciation: "Dayachesi", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "te5", native: "అవును", pronunciation: "Avunu", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "te6", native: "లేదు", pronunciation: "Ledu", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "te7", native: "అమ్మ", pronunciation: "Amma", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "te8", native: "నాన్న", pronunciation: "Naanna", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "te9", native: "అన్న", pronunciation: "Anna", meaning: "Elder brother", category: "family", difficulty: "easy" },
      { id: "te10", native: "అక్క", pronunciation: "Akka", meaning: "Elder sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "te11", native: "నీళ్లు", pronunciation: "Neellu", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "te12", native: "అన్నం", pronunciation: "Annam", meaning: "Rice", category: "food", difficulty: "easy" },
      { id: "te13", native: "టీ", pronunciation: "Tea", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "te14", native: "పాలు", pronunciation: "Paalu", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "te15", native: "రొట్టె", pronunciation: "Rotte", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "te16", native: "ఒకటి", pronunciation: "Okati", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "te17", native: "రెండు", pronunciation: "Rendu", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "te18", native: "మూడు", pronunciation: "Moodu", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "te19", native: "నాలుగు", pronunciation: "Naalugu", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "te20", native: "ఐదు", pronunciation: "Aidu", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "te21", native: "ఎరుపు", pronunciation: "Erupu", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "te22", native: "నీలం", pronunciation: "Neelam", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "te23", native: "ఆకుపచ్చ", pronunciation: "Aakupachcha", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "te24", native: "పసుపు", pronunciation: "Pasupu", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "te25", native: "నలుపు", pronunciation: "Nalupu", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "te26", native: "తల", pronunciation: "Thala", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "te27", native: "కన్ను", pronunciation: "Kannu", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "te28", native: "చేయి", pronunciation: "Cheyi", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "te29", native: "కాలు", pronunciation: "Kaalu", meaning: "Leg", category: "body", difficulty: "medium" },
      { id: "te30", native: "నోరు", pronunciation: "Noru", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "te31", native: "రోజు", pronunciation: "Roju", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "te32", native: "రాత్రి", pronunciation: "Raatri", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "te33", native: "ఉదయం", pronunciation: "Udayam", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "te34", native: "సాయంత్రం", pronunciation: "Saayantram", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "te35", native: "సమయం", pronunciation: "Samayam", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "te36", native: "ఇల్లు", pronunciation: "Illu", meaning: "House", category: "places", difficulty: "medium" },
      { id: "te37", native: "పాఠశాల", pronunciation: "Paathashala", meaning: "School", category: "places", difficulty: "medium" },
      { id: "te38", native: "మార్కెట్", pronunciation: "Market", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "te39", native: "ఆసుపత్రి", pronunciation: "Aasupatri", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "te40", native: "దేవాలయం", pronunciation: "Devaalayam", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "te41", native: "వెళ్లు", pronunciation: "Vellu", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "te42", native: "రా", pronunciation: "Raa", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "te43", native: "తిను", pronunciation: "Thinu", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "te44", native: "త్రాగు", pronunciation: "Thraagu", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "te45", native: "నిద్రపో", pronunciation: "Nidrapo", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "te46", native: "ఎండ", pronunciation: "Enda", meaning: "Sunshine", category: "weather", difficulty: "medium" },
      { id: "te47", native: "వర్షం", pronunciation: "Varsham", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "te48", native: "గాలి", pronunciation: "Gaali", meaning: "Wind", category: "weather", difficulty: "medium" },
      { id: "te49", native: "మంచు", pronunciation: "Manchu", meaning: "Snow", category: "weather", difficulty: "medium" },
      { id: "te50", native: "వేడిమి", pronunciation: "Vedimi", meaning: "Hot", category: "weather", difficulty: "medium" },
      { id: "te51", native: "చల్లదనం", pronunciation: "Challadanam", meaning: "Cold", category: "weather", difficulty: "medium" },
      { id: "te52", native: "వాతావరణం", pronunciation: "Vaathaavaranam", meaning: "Weather", category: "weather", difficulty: "medium" },
      { id: "te53", native: "సూర్యుడు", pronunciation: "Sooryudu", meaning: "Sun", category: "weather", difficulty: "medium" }
    ]
  },
  {
    id: "malayalam",
    name: "Malayalam",
    native: "മലയാളം",
    script: "Malayalam",
    words: [
      // Greetings & Basic
      { id: "ml1", native: "നമസ്കാരം", pronunciation: "Namaskaram", meaning: "Hello", category: "greetings", difficulty: "easy" },
      { id: "ml2", native: "നന്ദി", pronunciation: "Nandi", meaning: "Thank you", category: "greetings", difficulty: "easy" },
      { id: "ml3", native: "ക്ഷമിക്കണം", pronunciation: "Kshemikkanam", meaning: "Sorry", category: "greetings", difficulty: "easy" },
      { id: "ml4", native: "ദയവായി", pronunciation: "Dayavaayi", meaning: "Please", category: "greetings", difficulty: "easy" },
      { id: "ml5", native: "അതെ", pronunciation: "Athe", meaning: "Yes", category: "basic", difficulty: "easy" },
      { id: "ml6", native: "ഇല്ല", pronunciation: "Illa", meaning: "No", category: "basic", difficulty: "easy" },
      
      // Family
      { id: "ml7", native: "അമ്മ", pronunciation: "Amma", meaning: "Mother", category: "family", difficulty: "easy" },
      { id: "ml8", native: "അച്ഛൻ", pronunciation: "Achchan", meaning: "Father", category: "family", difficulty: "easy" },
      { id: "ml9", native: "ചേട്ടൻ", pronunciation: "Chettan", meaning: "Elder brother", category: "family", difficulty: "easy" },
      { id: "ml10", native: "ചേച്ചി", pronunciation: "Chechi", meaning: "Elder sister", category: "family", difficulty: "easy" },
      
      // Food & Drink
      { id: "ml11", native: "വെള്ളം", pronunciation: "Vellam", meaning: "Water", category: "food", difficulty: "easy" },
      { id: "ml12", native: "ചോറ്", pronunciation: "Choru", meaning: "Rice", category: "food", difficulty: "easy" },
      { id: "ml13", native: "ചായ", pronunciation: "Chaaya", meaning: "Tea", category: "food", difficulty: "easy" },
      { id: "ml14", native: "പാൽ", pronunciation: "Paal", meaning: "Milk", category: "food", difficulty: "easy" },
      { id: "ml15", native: "റൊട്ടി", pronunciation: "Rotti", meaning: "Bread", category: "food", difficulty: "easy" },
      
      // Numbers
      { id: "ml16", native: "ഒന്ന്", pronunciation: "Onnu", meaning: "One", category: "numbers", difficulty: "easy" },
      { id: "ml17", native: "രണ്ട്", pronunciation: "Randu", meaning: "Two", category: "numbers", difficulty: "easy" },
      { id: "ml18", native: "മൂന്ന്", pronunciation: "Moonnu", meaning: "Three", category: "numbers", difficulty: "easy" },
      { id: "ml19", native: "നാല്", pronunciation: "Naalu", meaning: "Four", category: "numbers", difficulty: "easy" },
      { id: "ml20", native: "അഞ്ച്", pronunciation: "Anchu", meaning: "Five", category: "numbers", difficulty: "easy" },
      
      // Colors
      { id: "ml21", native: "ചുവപ്പ്", pronunciation: "Chuvappu", meaning: "Red", category: "colors", difficulty: "easy" },
      { id: "ml22", native: "നീല", pronunciation: "Neela", meaning: "Blue", category: "colors", difficulty: "easy" },
      { id: "ml23", native: "പച്ച", pronunciation: "Pacha", meaning: "Green", category: "colors", difficulty: "easy" },
      { id: "ml24", native: "മഞ്ഞ", pronunciation: "Manja", meaning: "Yellow", category: "colors", difficulty: "easy" },
      { id: "ml25", native: "കറുപ്പ്", pronunciation: "Karuppu", meaning: "Black", category: "colors", difficulty: "easy" },
      
      // Body Parts
      { id: "ml26", native: "തല", pronunciation: "Thala", meaning: "Head", category: "body", difficulty: "medium" },
      { id: "ml27", native: "കണ്ണ്", pronunciation: "Kannu", meaning: "Eye", category: "body", difficulty: "medium" },
      { id: "ml28", native: "കൈ", pronunciation: "Kai", meaning: "Hand", category: "body", difficulty: "medium" },
      { id: "ml29", native: "കാൽ", pronunciation: "Kaal", meaning: "Leg", category: "body", difficulty: "medium" },
      { id: "ml30", native: "വായ", pronunciation: "Vaaya", meaning: "Mouth", category: "body", difficulty: "medium" },
      
      // Time
      { id: "ml31", native: "ദിവസം", pronunciation: "Divasam", meaning: "Day", category: "time", difficulty: "medium" },
      { id: "ml32", native: "രാത്രി", pronunciation: "Raathri", meaning: "Night", category: "time", difficulty: "medium" },
      { id: "ml33", native: "രാവിലെ", pronunciation: "Raavile", meaning: "Morning", category: "time", difficulty: "medium" },
      { id: "ml34", native: "വൈകുന്നേരം", pronunciation: "Vaikuneram", meaning: "Evening", category: "time", difficulty: "medium" },
      { id: "ml35", native: "സമയം", pronunciation: "Samayam", meaning: "Time", category: "time", difficulty: "medium" },
      
      // Places
      { id: "ml36", native: "വീട്", pronunciation: "Veedu", meaning: "House", category: "places", difficulty: "medium" },
      { id: "ml37", native: "സ്കൂൾ", pronunciation: "School", meaning: "School", category: "places", difficulty: "medium" },
      { id: "ml38", native: "ചന്ത", pronunciation: "Chanatha", meaning: "Market", category: "places", difficulty: "medium" },
      { id: "ml39", native: "ആശുപത്രി", pronunciation: "Aashupathri", meaning: "Hospital", category: "places", difficulty: "medium" },
      { id: "ml40", native: "ക്ഷേത്രം", pronunciation: "Kshethram", meaning: "Temple", category: "places", difficulty: "medium" },
      
      // Actions
      { id: "ml41", native: "പോകുക", pronunciation: "Pokuka", meaning: "To go", category: "actions", difficulty: "hard" },
      { id: "ml42", native: "വരിക", pronunciation: "Varika", meaning: "To come", category: "actions", difficulty: "hard" },
      { id: "ml43", native: "കഴിക്കുക", pronunciation: "Kazhikkuka", meaning: "To eat", category: "actions", difficulty: "hard" },
      { id: "ml44", native: "കുടിക്കുക", pronunciation: "Kudikkuka", meaning: "To drink", category: "actions", difficulty: "hard" },
      { id: "ml45", native: "ഉറങ്ങുക", pronunciation: "Uranguka", meaning: "To sleep", category: "actions", difficulty: "hard" },
      
      // Weather
      { id: "ml46", native: "വെയിൽ", pronunciation: "Veyil", meaning: "Sunshine", category: "weather", difficulty: "medium" },
      { id: "ml47", native: "മഴ", pronunciation: "Mazha", meaning: "Rain", category: "weather", difficulty: "medium" },
      { id: "ml48", native: "കാറ്റ്", pronunciation: "Kaattu", meaning: "Wind", category: "weather", difficulty: "medium" },
      { id: "ml49", native: "മഞ്ഞ്", pronunciation: "Manju", meaning: "Snow", category: "weather", difficulty: "medium" },
      { id: "ml50", native: "ചൂട്", pronunciation: "Choodu", meaning: "Hot", category: "weather", difficulty: "medium" },
      { id: "ml51", native: "തണുപ്പ്", pronunciation: "Thanuppu", meaning: "Cold", category: "weather", difficulty: "medium" }
    ]
  }
];

export const getLanguageById = (id: string): Language | undefined => {
  return languageData.find(lang => lang.id === id);
};

export const getWordsByCategory = (languageId: string, category: string): Word[] => {
  const language = getLanguageById(languageId);
  return language ? language.words.filter(word => word.category === category) : [];
};

export const getWordsByDifficulty = (languageId: string, difficulty: 'easy' | 'medium' | 'hard'): Word[] => {
  const language = getLanguageById(languageId);
  return language ? language.words.filter(word => word.difficulty === difficulty) : [];
};

export const getAllCategories = (languageId: string): string[] => {
  const language = getLanguageById(languageId);
  if (!language) return [];
  
  const categories = [...new Set(language.words.map(word => word.category))];
  return categories.sort();
};