export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  image: string;
  links: Link[];
};

export const profile = {
  name: 'Nicolas Loor Bazurto',
  role: 'Desarrollador de Software',
  tagline: 'Construyo interfaces limpias, APIs seguras y productos web listos para escalar.',
  location: 'Guayaquil, Ecuador',
  email: 'nicolasalexander.loor@hotmail.com',
  phone: '+593 980449512',
  links: {
    github: 'https://github.com/niallodev',
    linkedin: 'https://www.linkedin.com/in/nicol%C3%A1s-loor-bazurto-5172121a1',
    portfolio: 'https://niallodev.github.io/Portafolio_Frontend',
    awsCert:
      'https://www.udemy.com/certificate/UC-f598d7fd-6627-4a6c-b6b4-1427289a0d12/',
  },
};

export const about = {
  paragraphs: [
    'Ingeniero de Software junior con enfoque en desarrollo web. Me gusta convertir ideas en interfaces rapidas y claras, y conectar todo con APIs bien estructuradas.',
    'Trabajo con React/TypeScript, Node.js, Python (Django) y C# (.NET). Tambien tengo base en bases de datos (SQL Server, PostgreSQL) y herramientas de BI (Power BI, ETL).',
  ],
  strengths: [
    'Resolucion de problemas con enfoque practico',
    'Aprendizaje rapido y mejora continua',
    'Trabajo en equipo y comunicacion clara',
  ],
};

export const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Django', 'ASP.NET Core MVC', 'APIs REST', 'JWT', 'Validacion de entradas'],
  },
  {
    title: 'Datos',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Power BI', 'ETL'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Postman', 'Insomnia', 'VS Code', 'Scrum', 'Monday.com'],
  },
];

export const experience = [
  {
    company: 'ARCSA',
    role: 'Asistente del Departamento de TIC',
    dates: 'Feb 2023 - Ago 2023',
    bullets: [
      'Implemente practicas de seguridad basicas (respaldos y antivirus) para proteger informacion institucional.',
      'Administre y mantuve actualizada la base de datos de inventario de equipos tecnologicos.',
      'Instale sistemas operativos y configure redes en entornos con dominio.',
      'Realice mantenimiento preventivo y correctivo de hardware y software para reducir incidencias.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Gomoriecut Restaurant',
    blurb:
      'Aplicacion web para mejorar la gestion operativa de un restaurante con funcionalidades por rol y un flujo de trabajo claro.',
    highlights: [
      'Enfoque por roles: administrador, trabajador y cliente',
      'UI modular con componentes reutilizables',
      'Pensado para trazabilidad del servicio',
    ],
    tags: [
      'React',
      'TypeScript',
      'Tailwind',
      'Bootstrap',
      'Node.js',
      'PostgreSQL',
      'Socket.io',
      'Cloudinary',
    ],
    image: 'https://charming-lebkuchen-ef9bfc.netlify.app/config/hero.jpg',
    links: [
      { label: 'Demo', href: 'https://charming-lebkuchen-ef9bfc.netlify.app/auth' },
    ],
  },
  {
    title: 'Commic - El Pacto de los Espectros',
    blurb:
      'Comic interactivo desplegado en GitHub Pages. Proyecto creativo para mostrar habilidades web y experiencia visual.',
    highlights: [
      'Navegacion por escenas y enfoque en storytelling',
      'Despliegue en GitHub Pages',
      'Control de versiones con Git/GitHub',
    ],
    tags: ['React', 'HTML', 'CSS', 'GitHub Pages'],
    image: 'https://niallodev.github.io/Commic-El-Pacto-de-los-Espectros/img/pagina_1_cuadro_1.jpg',
    links: [
      { label: 'Demo', href: 'https://niallodev.github.io/Commic-El-Pacto-de-los-Espectros/' },
      { label: 'GitHub', href: 'https://github.com/niallodev/Commic-El-Pacto-de-los-Espectros' },
    ],
  },
];

export const certifications = [
  {
    title: '[New] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025',
    issuer: 'Udemy',
    date: 'Mayo 2025',
    href: profile.links.awsCert,
  },
];
