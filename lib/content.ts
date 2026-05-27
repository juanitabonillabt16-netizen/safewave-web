/**
 * SafeWave Academy - Contenido del sitio
 * ==========================================
 * Este archivo contiene TODO el texto del sitio.
 * Juanita: para cambiar cualquier texto, editar aqui.
 * Para cambiar imagenes: reemplazar archivos en /public/images/
 */

export const brand = {
  name: "SafeWave Academy",
  short: "SafeWave",
  tagline: "Clases de natacion privadas a domicilio en Miami",
  phone: "+1 786-872-1898",
  phoneDisplay: "786-872-1898",
  whatsapp: "17868721898",
  whatsappMessage: "Hola, me interesa el Diagnostico SafeWave para mi hijo",
  instagram: "safewave.academy",
  instagramUrl: "https://instagram.com/safewave.academy",
  email: "hola@safewaveacademy.com",
  location: "Miami-Dade, FL",
  redCrossVerifyUrl: "https://www.redcross.org/take-a-class/qrcode?certnumber=01NAPST",
  leadWebhookUrl: "https://asistentenova.app.n8n.cloud/webhook/safewave-lead-web",
};

export const nav = {
  links: [
    { href: "#programa", label: "Programa" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: "Evaluacion Gratis",
};

export const hero = {
  badge: "Natacion privada a domicilio - Miami, FL",
  titleStart: "Tu hijo merece aprender a nadar con",
  titleHighlight: "seguridad, confianza y atencion personalizada.",
  subtitle:
    "Clases privadas en tu piscina. Certificada Cruz Roja. Bilingue. Horarios flexibles. Programa con garantia de resultados.",
  primaryCta: "Agendar Evaluacion Gratis",
  secondaryCta: "Ver el Programa",
  image: "/images/juanita-teaching-1.jpeg",
  imageAlt: "Juanita ensenando natacion a un nino",
  stats: [
    { number: "1 a 1", label: "Personalizada" },
    { number: "A domicilio", label: "En tu piscina" },
    { number: "ES / EN", label: "Bilingue" },
  ],
};

export const trustBar = [
  {
    icon: "🛡️",
    bold: "Certificada",
    text: "Water Safety Instructor (American Red Cross)",
    link: { label: "Verificar", href: brand.redCrossVerifyUrl },
  },
  { icon: "📍", text: brand.location },
  { icon: "🗣️", text: "Espanol e Ingles" },
];

export const statsBar = [
  { num: "#1", label: "Florida lidera en ahogamientos infantiles" },
  { num: "88%", label: "Reduccion del riesgo con clases formales (NIH)" },
  { num: "90 dias", label: "Para nadar con seguridad" },
];

export const problems = {
  label: "Lo que preocupa a los padres",
  title: "La seguridad en el agua no puede esperar",
  subtitle:
    "En Florida, el ahogamiento es la causa #1 de muerte accidental en ninos menores de 5 anos. Aprender a nadar no es un lujo.",
  cards: [
    {
      icon: "😰",
      title: "Mi hijo le tiene miedo al agua",
      text: "Es mas comun de lo que crees. Con un enfoque progresivo y paciente, la mayoria pierde el miedo en 3-4 clases.",
    },
    {
      icon: "👥",
      title: "Las clases grupales no funcionaron",
      text: "En grupos grandes tu hijo no recibe la atencion que necesita. Cada nino aprende a su ritmo.",
    },
    {
      icon: "🚗",
      title: "No tengo tiempo de ir a una academia",
      text: "Entre el trabajo y las actividades, llevar a tu hijo a una piscina es complicado. Nosotros vamos a ti.",
    },
    {
      icon: "🔄",
      title: "Mi hijo cambia de instructor cada vez",
      text: "En academias grandes rotan instructores. Con SafeWave, siempre es Juanita - consistencia y confianza.",
    },
  ],
};

export const program = {
  label: "El Programa",
  title: "Programa Nadador Seguro 90",
  subtitle: "12 clases privadas a domicilio. Tu hijo aprende a nadar con seguridad y confianza en 90 dias.",
  badge: "MAS POPULAR",
  features: [
    { bold: "12 clases privadas", text: "a domicilio en tu piscina (45-60 min cada una)" },
    { bold: "Diagnostico SafeWave", text: "- evaluacion inicial gratuita" },
    { bold: "Metodo Ola Suave", text: "- protocolo de 5 fases para eliminar miedo al agua" },
    { bold: "Mapa de Nado Personal", text: "- roadmap visual de progreso por niveles" },
    { bold: "Mini Misiones Acuaticas", text: "- 20+ videos para practicar entre clases" },
    { bold: "Guia Co-Piloto para Papas", text: "- 15 ejercicios de refuerzo" },
    { bold: "Reporte de Progreso Mensual", text: "- video + escrito de avances" },
    { bold: 'Certificado "Nadador Seguro"', text: "- al completar el programa" },
    { bold: "Clase Booster gratis", text: "- sesion de refuerzo 30 dias despues" },
    { bold: "Garantia Anti-Lluvia", text: "- reagendamiento sin costo" },
  ],
  cta: "Agendar mi Evaluacion Gratuita",
  ctaSub: "El Diagnostico SafeWave es gratis y sin compromiso. Juanita va a tu piscina.",
  guarantee: {
    title: "Garantia Nadador Seguro",
    text: "Si despues de 12 clases tu hijo no nada 10 metros y flota 30 segundos, Juanita da clases adicionales gratis hasta que lo logre.",
  },
};

export const whySafeWave = {
  label: "Por que SafeWave",
  title: "No somos una academia cualquiera",
  cards: [
    { icon: "🏠", title: "A domicilio - en tu piscina", text: "No manejas a ningun lado. Juanita va a tu casa con todo lo necesario." },
    { icon: "🎯", title: "100% personalizada", text: "Cada clase se adapta al nivel, ritmo y objetivos del alumno." },
    { icon: "🛡️", title: "Certificada Cruz Roja", text: "Credencial oficial de la American Red Cross para ensenanza acuatica." },
    { icon: "🌊", title: "Especialista en miedo al agua", text: "Experiencia con ninos y adultos con miedo o traumas. Enfoque progresivo." },
    { icon: "🕐", title: "Horarios flexibles", text: "Lunes a viernes 9-6. Sabados y domingos 9-12. Nos adaptamos a ti." },
    { icon: "🗣️", title: "Bilingue ES / EN", text: "Comunicacion clara con padres y alumnos en su idioma preferido." },
  ],
};

export const howItWorks = {
  label: "Como funciona",
  title: "4 pasos para que tu hijo nade con confianza",
  steps: [
    { num: 1, title: "Escribenos", text: "Cuentanos la edad, nivel y objetivo de tu hijo." },
    { num: 2, title: "Diagnostico gratis", text: "Juanita va a tu piscina y evalua a tu hijo en 15 min." },
    { num: 3, title: "Plan personalizado", text: "Recibe el Mapa de Nado con niveles y timeline." },
    { num: 4, title: "Tu hijo nada", text: "En 90 dias, seguro y confiado en el agua." },
  ],
};

export const gallery = {
  label: "SafeWave en accion",
  title: "Asi se ven nuestras clases",
  images: [
    { src: "/images/juanita-teaching-hero.jpeg", alt: "Juanita ensenando natacion" },
    { src: "/images/juanita-teaching-1.jpeg", alt: "Clase privada de natacion" },
    { src: "/images/juanita-kids-pool.jpeg", alt: "Juanita con ninas en la piscina" },
    { src: "/images/juanita-toddler.jpeg", alt: "Clase de natacion para nino pequeno" },
  ],
};

export const testimonials = {
  label: "Lo que dicen las familias",
  title: "Resultados reales en Miami",
  reviews: [
    {
      stars: 5,
      text: "Mi hija de 4 anos le tenia panico al agua. Despues de 6 clases con Juanita, ya se mete sola y pide mas clases. El cambio fue increible.",
      author: "Carolina M.",
      role: "Mama - Doral, FL",
      initials: "CM",
    },
    {
      stars: 5,
      text: "Juanita is incredibly patient and professional. My son went from being scared to doing laps in just a few weeks. Highly recommend.",
      author: "Michael T.",
      role: "Dad - Coral Gables, FL",
      initials: "MT",
    },
    {
      stars: 5,
      text: "Lo mejor es que viene a la casa. No tengo que manejar con los ninos. Mis dos hijos ya nadan solos. Vale cada centavo.",
      author: "Laura P.",
      role: "Mama de 2 - Kendall, FL",
      initials: "LP",
    },
  ],
};

export const about = {
  label: "Tu instructora",
  title: "Conoce a Juanita",
  name: "Juanita Bonilla",
  paragraphs: [
    "Fundadora de SafeWave Academy. Certificada por la Cruz Roja Americana. Mas de 2 anos ensenando a ninos y adultos a nadar con seguridad y confianza.",
    "Ha trabajado con alumnos que tenian miedo al agua, ninos con necesidades especiales, y adultos que nunca aprendieron. Su enfoque: primero confianza, despues tecnica.",
  ],
  credentials: ["Certificada Red Cross", "Miami, FL", "Bilingue ES/EN", "A domicilio", "Todas las edades"],
  image: "/images/juanita-headshot.jpg",
};

export const faq = {
  label: "Preguntas frecuentes",
  title: "Respuestas para padres",
  items: [
    {
      q: "A partir de que edad pueden empezar?",
      a: "Todas las edades: bebes con acompanamiento de padres, ninos, adolescentes y adultos.",
    },
    {
      q: "Necesito tener piscina?",
      a: "Si, las clases son en tu piscina o en una que tengas acceso (comunidad, edificio, etc.).",
    },
    {
      q: "Mi hijo tiene mucho miedo al agua",
      a: "Es el caso mas comun. Juanita se especializa en miedo al agua con el Metodo Ola Suave - enfoque progresivo y paciente. La mayoria pierde el miedo en las primeras clases.",
    },
    {
      q: "Cuanto cuesta?",
      a: "El Diagnostico SafeWave es gratuito. En esa evaluacion, Juanita te recomienda el programa ideal para tu hijo y te da todos los detalles de inversion. Sin compromiso.",
    },
    {
      q: "Las clases son en espanol o ingles?",
      a: "Ambos. Juanita es bilingue y se adapta al idioma que prefieras.",
    },
    {
      q: "Que incluye cada clase?",
      a: "45-60 minutos de atencion personalizada, adaptacion al nivel, enfoque en seguridad, y reporte de progreso.",
    },
    {
      q: "Que zonas cubren?",
      a: "Miami-Dade: Doral, Kendall, Coral Gables, Brickell, Hialeah, Miami Beach, Aventura, Pinecrest y mas.",
    },
  ],
};

export const finalCta = {
  titleStart: "Dale a tu hijo el regalo de",
  titleHighlight: "nadar con seguridad.",
  subtitle:
    "Agenda el Diagnostico SafeWave gratuito. Nuestra especialista va a tu piscina, evalua a tu hijo en 15 minutos, y te entrega un plan personalizado. Sin costo. Sin compromiso.",
  form: {
    fullNamePlaceholder: "Tu nombre completo",
    phonePlaceholder: "Tu telefono (ej: 786-555-1234)",
    emailPlaceholder: "Tu email",
    childNamePlaceholder: "Nombre de tu hijo/a",
    ageLabel: "Edad del alumno",
    ageOptions: [
      { value: "1-3", label: "1 a 3 anos" },
      { value: "4-6", label: "4 a 6 anos" },
      { value: "7-12", label: "7 a 12 anos" },
      { value: "13-17", label: "13 a 17 anos" },
      { value: "adulto", label: "Adulto" },
    ],
    submitLabel: "Agendar Evaluacion Gratis",
    submittingLabel: "Enviando...",
  },
  success: {
    title: "Recibimos tu solicitud",
    text: "Te llamamos en menos de 3 minutos para coordinar tu Diagnostico SafeWave gratuito. Revisa tu WhatsApp.",
  },
  fallback: "Prefieres WhatsApp directo?",
};

export const footer = {
  copyright: "© 2026 SafeWave Academy. Miami, FL. Todos los derechos reservados.",
  tagline: "Natacion privada a domicilio · Certificada Cruz Roja · Bilingue ES/EN",
};
