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
  name: 'Nicolás Loor Bazurto',
  role: 'Ingeniero de Software Fullstack',
  tagline:
    'Desarrollo aplicaciones web y móviles de punta a punta con C# (.NET Core), React y TypeScript, y las despliego en producción sobre AWS.',
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
    'Ingeniero de Software Fullstack con experiencia en desarrollo web y móvil (Android/iOS) para plataformas empresariales y SaaS. Construyo APIs REST con C# (.NET Core) y frontends con React y TypeScript.',
    'Me encargo del ciclo completo: desarrollo, pases a QA y Producción, publicación en App Store y Google Play, y operación en la nube con AWS (EC2). También trabajo con SQL Server, PostgreSQL y Power BI.',
  ],
  strengths: [
    'Resolución de problemas con enfoque práctico',
    'Aprendizaje rápido y mejora continua',
    'Trabajo en equipo y comunicación clara',
  ],
};

export const skills = [
  {
    title: 'Frontend',
    description:
      'Construcción de interfaces responsivas, componentes reutilizables y experiencia de usuario fluida.',
    items: [
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend',
    description:
      'Diseño de APIs REST escalables, autenticación segura con JWT y lógica de negocio limpia.',
    items: [
      'C#',
      '.NET Framework',
      'ASP.NET Core MVC',
      'Node.js',
      'Django',
      'APIs REST',
      'JWT',
      'Validacion de entradas',
      'Azure (Autenticación)',
    ],
  },
  {
    title: 'Datos',
    description:
      'Modelado relacional, optimización de consultas SQL y procesos ETL para análisis.',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Power BI', 'ETL'],
  },
  {
    title: 'Herramientas',
    description:
      'Control de versiones con Git, pruebas de endpoints y despliegue continuo en la nube y tiendas.',
    items: [
      'Git',
      'GitHub',
      'AWS (EC2)',
      'Postman',
      'Insomnia',
      'VS Code',
      'Scrum',
      'Monday.com',
    ],
  },
];

export const experience = [
  {
    company: 'iCargy',
    role: 'Desarrollador Semi Senior',
    dates: 'Jul 2026 - Actualidad',
    bullets: [
      'Desarrollo y mantenimiento de plataformas web y móviles (Android/iOS) de logística y facturación electrónica con C# (.NET Core), React y APIs REST.',
      'Soporte técnico en producción y mantenimiento evolutivo de múltiples soluciones SaaS empresariales.',
      'Publicación y gestión de versiones móviles en App Store Connect (TestFlight) y Google Play Console.',
      'Monitoreo y administración de instancias en la nube (AWS EC2) y ambientes productivos.',
    ],
  },
  {
    company: 'Apptelink',
    role: 'Ingeniero de Desarrollo',
    dates: 'Sep 2025 - Jun 2026',
    bullets: [
      'Soporte y mantenimiento de aplicaciones en producción, atendiendo incidencias y mejoras evolutivas.',
      'Desarrollo de funcionalidades para web con C# y .NET Framework, conectando con SQL Server.',
      'Desarrollo móvil con React Native para nuevas funcionalidades y ajustes de experiencia.',
      'Integración de autenticación con Azure para el inicio de sesión (login) del sistema.',
      'Apoyo en QA: validación de cambios, pruebas funcionales y verificación antes de publicar.',
      'Publicaciones y tareas relacionadas con servidores para asegurar despliegues estables.',
    ],
  },
  {
    company: 'ARCSA',
    role: 'Asistente del Departamento de TIC',
    dates: 'Feb 2023 - Ago 2023',
    bullets: [
      'Implementé prácticas de seguridad básicas (respaldos y antivirus) para proteger información institucional.',
      'Administré y mantuve actualizada la base de datos de inventario de equipos tecnológicos.',
      'Instalé sistemas operativos y configuré redes en entornos con dominio.',
      'Realicé mantenimiento preventivo y correctivo de hardware y software para reducir incidencias.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Gomoriecut Restaurant',
    blurb:
      'Aplicación web para mejorar la gestión operativa de un restaurante con funcionalidades por rol y un flujo de trabajo claro.',
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
      'Cómic interactivo desplegado en GitHub Pages. Proyecto creativo para mostrar habilidades web y experiencia visual.',
    highlights: [
      'Navegación por escenas y enfoque en storytelling',
      'Despliegue en GitHub Pages',
      'Control de versiones con Git/GitHub',
    ],
    tags: ['React', 'HTML', 'CSS', 'GitHub Pages'],
    image: 'https://niallodev.github.io/Commic-El-Pacto-de-los-Espectros/img/pagina_1_cuadro_1.jpg',
    links: [
      { label: 'Demo', href: 'https://niallodev.github.io/Commic-El-Pacto-de-los-Espectros/' },
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
