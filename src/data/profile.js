// ============================================================
//  Contenido del portafolio: edita este archivo para actualizar
//  textos, proyectos, habilidades y datos de contacto.
// ============================================================

export const profile = {
  name: 'Eduardo Peralta',
  initials: 'EP',
  role: 'Analista de Sistemas & Desarrollador Odoo',
  tagline:
    'Diseño, desarrollo y mantengo soluciones ERP Odoo que automatizan procesos y hacen crecer a las empresas.',
  location: 'Lima, Perú',
  available: true,
  // Coloca tu foto en /public (ej. /public/foto.jpg) y escribe '/foto.jpg'
  photo: '/eduardo-peralta.jpg',
  cv: '', // ej. '/cv-eduardo-peralta.pdf'
  contact: {
    email: 'eduardo7sistemas@gmail.com',
    phone: '+51 925 219 103',
    whatsapp: '51925219103', // código de país + número, sin espacios ni '+'
    linkedin: 'https://www.linkedin.com/in/eduardo-peralta-quicaño-a53766b8',
    github: 'https://github.com/3p3r4lt4',
  },
};

export const about = {
  paragraphs: [
    'Soy un profesional especializado en el análisis, desarrollo y mantenimiento de sistemas ERP Odoo. Me apasiona transformar requerimientos de negocio en soluciones técnicas claras, escalables y bien documentadas.',
    'Con más de 3 años en el ecosistema Odoo, he participado en implementaciones, desarrollos a medida, integraciones con servicios externos y en la operación de sistemas en producción sobre servidores cloud.',
  ],
  stats: [
    { value: '3+', label: 'Años de experiencia' },
    { value: '20+', label: 'Módulos desarrollados' },
    { value: '3+', label: 'Implementaciones' },
    { value: '99%', label: 'Uptime en producción' },
  ],
};

export const services = [
  {
    icon: 'Wrench',
    title: 'Mantenimiento Odoo',
    description:
      'Mantenimiento preventivo y correctivo de instancias Odoo en producción, actualizaciones y optimización de rendimiento.',
  },
  {
    icon: 'Code2',
    title: 'Desarrollo a Medida',
    description:
      'Módulos personalizados en Python y XML, vistas OWL, reportes QWeb y automatizaciones adaptadas a tu negocio.',
  },
  {
    icon: 'Cloud',
    title: 'Despliegue Cloud',
    description:
      'Instalación y migración en Linode, DigitalOcean o AWS con Docker, Nginx, SSL y backups automatizados.',
  },
  {
    icon: 'ClipboardList',
    title: 'Análisis & Documentación',
    description:
      'Levantamiento de requerimientos, diseño funcional, documentación técnica y planes de pruebas (QA).',
  },
  {
    icon: 'Plug',
    title: 'Integraciones',
    description:
      'Conexión de Odoo con APIs REST, facturación electrónica SUNAT, pasarelas de pago y sistemas externos.',
  },
  {
    icon: 'GraduationCap',
    title: 'Soporte & Capacitación',
    description:
      'Acompañamiento a usuarios finales y capacitación de equipos para adoptar el ERP con éxito.',
  },
];

export const skills = [
  {
    group: 'ERP & Backend',
    items: [
      { name: 'Odoo (Python / XML)', level: 92 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'Node.js / Express', level: 70 },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 70 },
      { name: 'OWL / QWeb', level: 80 },
      { name: 'HTML & CSS', level: 85 },
    ],
  },
  {
    group: 'DevOps & Cloud',
    items: [
      { name: 'Linux', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Nginx', level: 75 },
      { name: 'Linode / DigitalOcean', level: 80 },
    ],
  },
];

export const softSkills = [
  'Análisis de requerimientos',
  'Documentación técnica',
  'Testing & QA',
  'Soporte a usuarios',
  'Gestión de proyectos',
  'Capacitación',
  'Git & GitHub',
  'Metodologías ágiles',
];

export const projects = [
  {
    title: 'Módulo de Inventario Avanzado',
    description:
      'Módulo personalizado para gestión de inventarios con trazabilidad en tiempo real y lectura de código de barras.',
    category: 'odoo',
    technologies: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
    features: ['Stock en tiempo real', 'Reportes automatizados', 'Código de barras'],
    repo: '',
    demo: '',
  },
  {
    title: 'Facturación Electrónica SUNAT',
    description:
      'Implementación de facturación electrónica adaptada a la normativa peruana con comunicación vía PSE.',
    category: 'integration',
    technologies: ['Odoo', 'Python', 'API REST', 'XML'],
    features: ['XML UBL 2.1', 'Integración PSE/OSE', 'Contingencias'],
    repo: '',
    demo: '',
  },
  {
    title: 'Dashboard de Analytics',
    description:
      'Panel de control con indicadores de negocio, gráficos interactivos y exportación de datos.',
    category: 'odoo',
    technologies: ['Odoo', 'OWL', 'JavaScript', 'Chart.js'],
    features: ['KPIs en tiempo real', 'Gráficos interactivos', 'Exportación'],
    repo: '',
    demo: '',
  },
  {
    title: 'Migración a Servidor Cloud',
    description:
      'Despliegue y migración de una instancia Odoo productiva a Linode con alta disponibilidad.',
    category: 'devops',
    technologies: ['Linux', 'Docker', 'Nginx', 'PostgreSQL'],
    features: ['Hardening de servidor', 'Backups automáticos', 'Monitoreo'],
    repo: '',
    demo: '',
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este sitio: SPA construida con React y Vite, totalmente responsive y desplegada en Netlify.',
    category: 'web',
    technologies: ['React', 'Vite', 'CSS', 'Netlify'],
    features: ['Responsive', 'Modo oscuro/claro', 'Netlify Forms'],
    repo: 'https://github.com/3p3r4lt4/portafolio-personal',
    demo: '',
  },
];

export const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'odoo', label: 'Odoo' },
  { id: 'integration', label: 'Integraciones' },
  { id: 'devops', label: 'DevOps' },
  { id: 'web', label: 'Web' },
];

export const experience = [
  {
    period: '2023 — Actualidad',
    role: 'Analista de Sistemas Odoo',
    company: 'Fiberlux Tech',
    description:
      'Análisis funcional, desarrollo de módulos y mantenimiento del ERP en producción. Despliegues en cloud y soporte a usuarios.',
  },
  {
    period: '2022 — 2023',
    role: 'Desarrollador Odoo',
    company: 'Redes Opticas Peru',
    description:
      'Desarrollo de funcionalidades a medida, integraciones con servicios externos y facturación electrónica.',
  },
  {
    period: '2021 — 2022',
    role: 'Soporte & QA',
    company: 'Logistica Integral',
    description:
      'Pruebas funcionales, documentación técnica y capacitación de usuarios finales.',
  },
];
