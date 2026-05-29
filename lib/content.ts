/**
 * SafeWave Academy - Contenido del sitio
 * ==========================================
 * Este archivo contiene TODO el texto del sitio.
 * Juanita: para cambiar cualquier texto, editar aqui.
 * Para cambiar imagenes: reemplazar archivos en /public/images/
 *
 * Ultima actualizacion: 2026-05-28 con respuestas reales de Juanita.
 * Items pendientes marcados como [VERIFICAR] todavia.
 */

export const brand = {
  name: "SafeWave Academy",
  short: "SafeWave",
  tagline: "Clases de natacion privadas a domicilio en Miami",
  phone: "+1 786-872-1898",
  phoneDisplay: "786-872-1898",
  whatsapp: "17868721898",
  whatsappMessage: "Hola, me interesa una clase con SafeWave Academy para mi hijo",
  instagram: "safewave.academy",
  instagramUrl: "https://instagram.com/safewave.academy",
  email: "juanitabonillabt16@gmail.com",
  location: "Miami-Dade, FL",
  leadWebhookUrl: "https://asistentenova.app.n8n.cloud/webhook/safewave-lead-web",
};

export const nav = {
  links: [
    { href: "#programas", label: "Programas" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#sobre", label: "Sobre Juanita" },
    { href: "#faq", label: "Preguntas" },
  ],
  cta: "Agendar Clase",
};

export const hero = {
  badge: "Natacion privada a domicilio - Miami, FL",
  titleStart: "Tu hijo aprende a nadar con",
  titleHighlight: "confianza, seguridad y atencion personalizada.",
  subtitle:
    "Clases privadas en tu piscina. Un instructor que conoce a tu hijo. Sin grupos. Sin presion. Avanza a su ritmo, sin perder un dia.",
  primaryCta: "Reservar mi Clase",
  secondaryCta: "Como funciona",
  image: "/images/juanita-teaching-1.jpeg",
  imageAlt: "Juanita ensenando natacion a un nino",
  stats: [
    { number: "1 a 1", label: "Personalizada" },
    { number: "30 min", label: "Por clase" },
    { number: "En tu piscina", label: "A domicilio" },
  ],
};

export const trustBar = [
  { icon: "🏊‍♀️", text: "Especialista en miedo al agua" },
  { icon: "📍", text: brand.location },
  { icon: "🗣️", text: "Bilingue ES / EN" },
];

export const statsBar = [
  { num: "#1", label: "Florida lidera en ahogamientos infantiles" },
  { num: "88%", label: "Reduccion del riesgo con clases formales (NIH)" },
  { num: "~5 clases", label: "Promedio para perder el miedo al agua" },
];

export const problems = {
  label: "Lo que preocupa a los padres",
  title: "La seguridad en el agua no puede esperar",
  subtitle:
    "En Florida, el ahogamiento es la causa #1 de muerte accidental en ninos menores de 5 anos. Aprender a nadar no es un lujo - es seguridad de vida.",
  cards: [
    {
      icon: "😰",
      title: "Mi hijo le tiene miedo al agua",
      text: "Es lo mas comun. Empezamos por la confianza, no por la tecnica. En unas 5 clases el miedo empieza a soltarse.",
    },
    {
      icon: "👥",
      title: "Las clases grupales no funcionaron",
      text: "En grupos grandes tu hijo no recibe la atencion que necesita. Aqui es 1 a 1 - cada clase es para el.",
    },
    {
      icon: "🚗",
      title: "No tengo tiempo de ir a una academia",
      text: "Entre el trabajo y la rutina, manejar es complicado. Yo voy a tu piscina con todo lo necesario.",
    },
    {
      icon: "🌊",
      title: "Ya usa flotadores - eso no es nadar",
      text: "Los flotadores dan falsa seguridad. Trabajamos para que tu hijo nade de verdad, sin depender de ellos.",
    },
  ],
};

export const program = {
  label: "Programas",
  title: "Elige el programa que mejor se adapte a tu hijo",
  subtitle:
    "Dos formas de empezar. Ambas con clases privadas de 30 minutos en tu piscina, atencion 1 a 1, y enfoque progresivo: primero confianza, despues tecnica.",
  packages: [
    {
      name: "Paquete Esencial",
      tag: "Para probar o miedo inicial",
      price: "$225",
      priceNote: "Pago unico o 2 pagos de $112.50",
      duration: "5 clases de 30 min",
      schedule: "2 a 3 semanas",
      audience: "Quien quiere probar o ninos con miedo inicial",
      features: [
        "Evaluacion inicial sin costo",
        "5 clases personalizadas 1 a 1",
        "Enfoque en confianza y primeras tecnicas",
        "En tu piscina, sin manejar",
      ],
      result: "Tu hijo da el primer paso y pierde el miedo inicial.",
      cta: "Reservar Esencial",
      featured: false,
    },
    {
      name: "Paquete 10 Clases",
      tag: "Para empezar bien",
      price: "$385",
      priceNote: "Pago unico o 2 pagos de $192.50",
      duration: "10 clases de 30 min",
      schedule: "3 semanas (3x semana) o 4 semanas (2x semana)",
      audience: "Ninos principiantes o que ya tienen base",
      features: [
        "Evaluacion inicial sin costo",
        "Clases personalizadas 1 a 1",
        "Trabajo en confianza y tecnica",
        "1 clase extra de garantia si hace falta",
        "En tu piscina, sin manejar",
      ],
      result: "Tu hijo gana confianza y bases solidas en el agua.",
      cta: "Reservar Paquete 10",
      featured: false,
    },
    {
      name: "Programa Intensivo",
      tag: "Mas popular - 12 clases",
      price: "$429",
      priceNote: "Pago unico o 2 pagos de $214.50",
      duration: "12 clases de 30 min",
      schedule: "Calendario intensivo - ideal verano",
      audience: "Ninos con miedo o que quieren avanzar rapido",
      features: [
        "Evaluacion inicial sin costo",
        "12 clases personalizadas 1 a 1",
        "Trabajo intensivo en confianza y tecnica",
        "Guia para padres con ejercicios de refuerzo",
        "Certificado al completar el programa",
        "1 clase extra de garantia si hace falta",
      ],
      result: "Tu hijo pasa del miedo a la independencia en el agua.",
      cta: "Reservar Intensivo",
      featured: true,
    },
  ],
  footnote: "Pago en 1 o 2 partes (sin recargo). Por Zelle o efectivo. Sin contratos largos. Sin sorpresas.",
};

export const whySafeWave = {
  label: "Por que SafeWave",
  title: "No somos una academia cualquiera",
  cards: [
    {
      icon: "🏠",
      title: "A domicilio - en tu piscina",
      text: "No manejas a ningun lado. Juanita va a tu casa con todo lo necesario.",
    },
    {
      icon: "🎯",
      title: "100% personalizada 1 a 1",
      text: "Cada clase se adapta al nivel, ritmo y objetivos de tu hijo. Sin compartir atencion.",
    },
    {
      icon: "💛",
      title: "Confianza primero",
      text: "Trabajamos el lado emocional antes que la tecnica. El miedo se va y la tecnica fluye.",
    },
    {
      icon: "🌊",
      title: "Especialista en miedo al agua",
      text: "Experiencia con ninos que llegan con miedo fuerte. Enfoque progresivo y respetuoso.",
    },
    {
      icon: "🕐",
      title: "Horarios flexibles",
      text: "Nos adaptamos a tu agenda. Lunes a domingo segun disponibilidad.",
    },
    {
      icon: "🗣️",
      title: "Bilingue ES / EN",
      text: "Comunicacion clara con padres y alumnos en su idioma preferido.",
    },
  ],
};

export const howItWorks = {
  label: "Como funciona",
  title: "4 pasos para que tu hijo gane confianza en el agua",
  steps: [
    { num: 1, title: "Escribenos", text: "Por WhatsApp. Cuentanos edad, nivel y donde es la piscina." },
    { num: 2, title: "Primera clase", text: "Juanita va a tu piscina, conoce a tu hijo y evalua su nivel real." },
    { num: 3, title: "Plan a tu medida", text: "Recomendamos el programa ideal segun lo que vimos en la primera clase." },
    { num: 4, title: "Tu hijo nada", text: "Confianza primero, tecnica despues. A su ritmo, sin presion." },
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

// TEMPORALMENTE OCULTO en page.tsx hasta que Juanita nos pase 4 testimonios mas
// reales con quotes textuales (los 2 anteriores eran inventados).
export const testimonials = {
  label: "Lo que dicen las familias",
  title: "Historias reales de familias SafeWave",
  reviews: [
    {
      stars: 5,
      text: "Mi hijo Andre no queria estar en el agua sin sus 'alas'. Con Juanita las fue soltando poco a poco y empezo a confiar. Hoy se mete al agua tranquilo, pide entrar el primero. Vale cada peso.",
      author: "Mama de Andre",
      role: "Familia SafeWave",
      initials: "MA",
    },
  ],
};

export const about = {
  label: "Tu instructora",
  title: "Conoce a Juanita",
  name: "Juanita Bonilla",
  paragraphs: [
    "Soy la fundadora de SafeWave Academy y la instructora con la que va a trabajar tu hijo en cada clase.",
    "Empece SafeWave porque me apasiona ayudar a ninos a superar el miedo al agua. En las academias tradicionales muchos ninos no avanzan porque no reciben atencion personalizada - se sienten un numero mas en la fila.",
    "Aqui es distinto. Vamos a tu piscina, soy yo en cada clase, y empezamos por la parte mas importante: que tu hijo se sienta seguro. La tecnica viene despues, naturalmente.",
  ],
  credentials: [
    "Especialista en miedo al agua",
    "Miami-Dade, FL",
    "Bilingue ES/EN",
    "A domicilio",
    "Todas las edades",
  ],
  image: "/images/juanita-headshot.jpg",
};

export const faq = {
  label: "Lo que mas nos preguntan",
  title: "Respuestas honestas",
  items: [
    {
      q: "Esta caro comparado con otras opciones",
      a: "Lo entiendo. Lo que pagas no son '10 clases' - es atencion 1 a 1, a domicilio, con alguien que conoce a tu hijo. Las clases grupales son mas baratas, pero tu hijo recibe 5 minutos de atencion real en cada una. Aqui son 30 minutos enteros para el. Y son tus hijos - su seguridad en el agua es inversion, no gasto.",
    },
    {
      q: "Mi hijo tiene mucho miedo al agua",
      a: "Ese es exactamente el caso en el que trabajo mejor. No forzamos nada. Empezamos por jugar fuera del agua, despues borde, despues entrar de la mano. En unas 5 clases la mayoria empieza a meter la cara y soltar el miedo. Es un proceso respetuoso.",
    },
    {
      q: "Mi hijo nunca ha nadado",
      a: "Perfecto - empezamos desde cero, sin que tenga que 'compararse' con nadie. Si no tiene miedo, avanza mas rapido. Si tiene miedo, lo trabajamos primero.",
    },
    {
      q: "No se si le va a gustar",
      a: "Por eso la primera clase es la evaluacion - en esa clase voy a tu piscina, conozco a tu hijo, y tu ves como me conecto con el. Si no fluye, no hay compromiso de seguir.",
    },
    {
      q: "No tengo tiempo de llevarlo a ningun lado",
      a: "Por eso voy yo a tu piscina. Tu solo tienes que estar (o no, segun la edad). Es la opcion mas comoda - cero traslados, cero estres.",
    },
    {
      q: "Prefiero clases grupales, asi socializa",
      a: "Lo entiendo. La verdad es que cada nino aprende a su ritmo - en grupos los miedosos se atrasan y los rapidos se aburren. Aqui avanza a SU velocidad, sin frenos ni empujones. Una vez que ya nada con seguridad, las clases grupales para socializar son una excelente opcion.",
    },
    {
      q: "Mi hijo ya usa flotadores, ya nada",
      a: "Con flotadores no nada - flota. Eso le da una falsa seguridad muy peligrosa: el dia que cae al agua sin ellos, no sabe que hacer. Trabajamos para que pueda flotar y desplazarse sin depender de nada externo.",
    },
    {
      q: "Necesito tener piscina propia?",
      a: "Si - o piscina de comunidad/edificio. Las clases son siempre en agua que tu hijo conozca, asi se siente mas seguro desde el primer dia.",
    },
    {
      q: "Hablas en espanol o ingles?",
      a: "Los dos. Me adapto al que prefiera tu hijo y tu familia.",
    },
    {
      q: "Que zonas cubres?",
      a: "Miami-Dade: Doral, Kendall, Coral Gables, Brickell, Hialeah, Miami Beach, Aventura, Pinecrest, Weston y zonas cercanas.",
    },
  ],
};

export const finalCta = {
  titleStart: "Empieza por la primera clase.",
  titleHighlight: "Ahi sabes si SafeWave es para ti.",
  subtitle:
    "Escribenos por WhatsApp o llena el formulario. Te respondemos rapido para agendar la primera clase con Juanita en tu piscina.",
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
    submitLabel: "Reservar mi Clase",
    submittingLabel: "Enviando...",
  },
  success: {
    title: "Recibimos tu solicitud",
    text: "Juanita te contacta por WhatsApp en menos de 24 horas para coordinar tu primera clase.",
  },
  fallback: "Prefieres escribir directo por WhatsApp?",
};

export const footer = {
  copyright: "© 2026 SafeWave Academy. Miami, FL. Todos los derechos reservados.",
  tagline: "Natacion privada a domicilio · Miami-Dade · Bilingue ES/EN",
};
