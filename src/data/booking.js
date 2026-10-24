export const services = [
  { id: 'iv-infusions', title: 'IV Infusions', description: 'Targeted intravenous nutrient therapies for energy, immunity and recovery.', icon: 'science', price: 220 },
  { id: 'custom-iv-drips', title: 'Custom IV Drips', description: 'Personalised formulations meticulously tailored to your clinical needs.', icon: 'science', price: 280 },
  { id: 'health-assessments', title: 'Health Assessment', description: 'Comprehensive wellness evaluations including clinical history, vitals.', icon: 'health', price: 199 },
  { id: 'preventative-health', title: 'Integrated Health & Wellness', description: 'Proactive health screenings and personalised wellness strategies.', icon: 'hospital', price: 180 },
  { id: 'clinical-legal', title: 'Clinical Legal Services', description: 'Expert clinical legal consulting and documentation services (Hourly rate applies).', icon: 'business', price: 150 },
  { id: 'aged-care-ndis', title: 'Aged Care & NDIS', description: 'Professional nursing care for aged-care residents and NDIS participants.', icon: 'elderly', price: 160 },
  { id: 'blood-collection', title: 'Blood Collection', description: 'Convenient, professional blood collection services at your preferred location.', icon: 'blood', price: 149 },
  { id: 'teeth-whitening', title: 'Teeth Whitening', description: 'High-performance clinical teeth whitening with protective minerals.', icon: 'teeth', price: 250 },
  { id: 'corporate-health', title: 'Corporate Health Services', description: 'Workplace wellness programmes, health checks and team vitality packages.', icon: 'business', price: 250 },
]

export const ivPackages = [
  { id: 'immune', name: 'Immune Defence IV', price: 260, desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { id: 'energy', name: 'Energy & Performance IV', price: 240, desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { id: 'beauty', name: 'Beauty & Skin Glow IV', price: 320, desc: 'Biotin and collagen-boosting nutrients.' },
  { id: 'detox', name: 'Detox & Liver Support IV', price: 300, desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { id: 'hydration', name: 'Hydration & Recovery IV', price: 220, desc: 'Electrolytes and minerals for rapid rehydration.' },
  { id: 'athlete', name: 'Athlete Recovery IV', price: 260, desc: 'Targeted nutrients to accelerate muscle recovery.' },
]

export const customBases = [
  { id: 'cd-hydration', name: 'Hydration Revival Infusion', price: 280, desc: 'Vitamin C, Magnesium, B-Complex & Zinc' },
  { id: 'cd-anti', name: 'Restorative & Wellness Infusion', price: 350, desc: 'Vitamin C, Magnesium, B-Complex, Zinc & Taurine' },
  { id: 'cd-immune', name: 'Immune Defence Infusion', price: 430, desc: 'Vitamin C, B-Complex, Zinc & Selenium' },
  { id: 'cd-recovery', name: 'Recovery & Performance Infusion', price: 455, desc: 'Vitamin C, Magnesium, B-complex, Vitamin B12, Taurine & GB Shot' },
  { id: 'cd-calm', name: 'Calm & Restore Infusion', price: 350, desc: 'Magnesium, GABA, Taurine' },
  { id: 'cd-liver', name: 'Liver Health Support Infusion', price: 375, desc: 'Vitamin C, B-Complex, Glycine & B12' },
  { id: 'cd-hair', name: 'Hair, Skin & Nails Infusion', price: 395, desc: 'Vitamin C, Magnesium, B-Complex, Zinc & Biotin' },
  { id: 'cd-glow', name: 'The Glow Infusion', price: 420, desc: 'Vitamin C, B-Complex & Zinc' },
]

export const customAddons = [
  { id: 'add-vitc', name: 'Vitamin C', price: 54, priceLabel: 'From $54', desc: 'Potent antioxidant protection.' },
  { id: 'add-mag', name: 'Magnesium', price: 35, desc: 'Muscle relaxation and tension relief.' },
  { id: 'add-zinc', name: 'Zinc', price: 54, desc: 'Immune support and cellular recovery.' },
  { id: 'add-bcomp', name: 'B complex', price: 54, desc: 'Nervous system support and energy.' },
  { id: 'add-bcomp-plus', name: 'B Complex Plus', price: 64, desc: 'Enhanced B-vitamin support.' },
  { id: 'add-sel', name: 'Selenium', price: 70, desc: 'Powerful antioxidant supporting thyroid and metabolic function.' },
  { id: 'add-gly', name: 'Glycine', price: 64, desc: 'Supports cellular health, sleep, and joint recovery.' },
  { id: 'add-gb', name: 'GB Shot', price: 64, desc: 'Potent shot for cellular wellness and recovery.' },
  { id: 'add-sd', name: 'SD Shot', price: 70, desc: 'Clinical supplemental shot for optimal performance.' },
  { id: 'add-tau', name: 'Taurine', price: 70, desc: 'Supports cardiovascular health and cellular hydration.' },
]

export const customBoosters = [
  { id: 'boost-b12', name: 'Vitamin B12 Shot', price: 59, desc: 'Increase metabolism, boost energy, regulate mood, sleep and appetite.' },
  { id: 'boost-biotin', name: 'Biotin B7', price: 54, desc: 'The elixir for your hair, skin and nails to thrive.' },
  { id: 'boost-coq10', name: 'COQ10', price: 54, desc: 'Support exercise performance and recovery while helping to reduce fatigue and enhance endurance.' },
  { id: 'boost-vitd', name: 'Vitamin D', price: 99, desc: 'Helps your immune system against viruses & builds density in your bones.' },
  { id: 'boost-ala', name: 'ALA Complex', price: 58, desc: 'Powerful anti-oxidant that supports cellular energy, nerve health and metabolic balance.' },
]

export const servicePackages = {
  'health-assessments': [
    { id: 'pkg-health-assess', name: 'Health Assessment and Blood Collection', price: 199, desc: 'Comprehensive wellness evaluations including clinical history, vitals, and standard blood collection.' },
  ],
  'preventative-health': [
    { id: 'pkg-prev-health', name: 'Integrated Health & Wellness', price: 180, desc: 'Proactive health screenings and personalised wellness strategies.' },
  ],
  'aged-care-ndis': [
    { id: 'pkg-aged-care', name: 'Aged Care & NDIS', price: 160, desc: 'Professional nursing care for aged-care residents and NDIS participants.' },
  ],
  'blood-collection': [
    { id: 'pkg-blood', name: 'Blood Collection', price: 149, desc: 'Convenient, professional blood collection services at your preferred location.' },
  ],
  'teeth-whitening': [
    { id: 'pkg-teeth-single', name: 'Single Session', price: 250, desc: '60-minute session including standard whitening and post-care guide.' },
    { id: 'pkg-teeth-triple', name: 'Triple Session', price: 259, desc: '3x intensive rounds for deep stain removal and maximum results.' },
    { id: 'pkg-teeth-couples', name: 'Couples Session', price: 499, desc: 'Simultaneous treatment for two people in one visit.' },
  ],
  'corporate-health': [
    { id: 'pkg-corp', name: 'Corporate Health Services', price: 250, desc: 'Workplace wellness programmes, health checks and team vitality packages.' },
  ],
  'clinical-legal': [
    { id: 'pkg-legal', name: 'Clinical Legal Services', price: 150, priceLabel: '$150 / hr', desc: 'Expert clinical legal consulting and documentation services (Hourly rate applies).' },
  ],
}

export const appointmentTypes = [
  { id: 'home-visit', title: 'Home Visit', description: 'Our clinical team comes to your home', emoji: '🏠' },
  { id: 'corporate-visit', title: 'Corporate / Workplace Visit', description: 'Onsite nursing at your workplace', emoji: '🏢' },
  { id: 'teleconsultation', title: 'Teleconsultation', description: 'Virtual consultation via secure video link', emoji: '💻' },
]

export const nurses = [
  { id: 'belle', name: 'Nurse Belle', image: '/images/nurse-belle.png', calendlyUrl: 'https://calendly.com/belgiiin/wellness-vitality-australia-belle-colak' },
  { id: 'elias', name: 'Nurse Elias', image: '/images/nurse-elias.png', calendlyUrl: 'https://calendly.com/elias-roumie-jvve/wellness-vitality-australia-elias-roumie' },
]

export const stepNames = ['Services', 'Packages', 'Nurse', 'Appointment', 'Details', 'Date & Time', 'Summary', 'Payment']

export const stepHeadings = [
  { label: 'Select Services', sub: 'Choose one or more clinical services you need' },
  { label: 'Select Packages', sub: 'Customise your formulations based on the selected services' },
  { label: 'Select Your Nurse', sub: 'Choose your preferred healthcare professional for this session' },
  { label: 'Appointment Type', sub: 'How would you like to receive care?' },
  { label: 'Personal Details', sub: 'Tell us a little about yourself' },
  { label: 'Date & Time', sub: 'Pick your preferred appointment slot' },
  { label: 'Summary & Review', sub: 'Review your booking before payment' },
  { label: 'Payment', sub: 'Complete your booking securely' },
]

export const timeSlots = [
  '07:00 AM - 09:00 AM',
  '09:00 AM - 11:00 AM',
  '11:00 AM - 01:00 PM',
  '01:00 PM - 03:00 PM',
  '03:00 PM - 05:00 PM',
  '05:00 PM - 07:00 PM',
  '07:00 PM - 09:00 PM',
]
