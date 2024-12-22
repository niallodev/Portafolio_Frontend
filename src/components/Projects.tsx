import { FaGithub, FaEye } from 'react-icons/fa'; // Para agregar iconos de GitHub y vista previa
import { FaReact, FaNodeJs, FaDatabase, FaCss3, FaHtml5, FaBrain } from 'react-icons/fa'; // Ejemplo de íconos
import Slider from 'react-slick'; // Carrusel
import "slick-carousel/slick/slick.css"; // Importa estilos básicos
import "slick-carousel/slick/slick-theme.css"; // Importa estilos del tema


function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      // description: 'Descripción breve del proyecto 1. Aquí puedes hablar de las tecnologías usadas y la solución que ofreciste.',
      description: 'El proyecto "El Pacto de los Espectros" es un cómic interactivo desarrollado para mostrar habilidades técnicas y como regalo personal. Utiliza tecnologías web como HTML, CSS y React para crear una experiencia visual dinámica. Las ilustraciones fueron generadas con la ayuda de Leonardo.ai, incorporando un estilo único y detallado. Además, se implementaron herramientas de colaboración como Git y GitHub para el control de versiones y el trabajo en equipo. Este proyecto tiene como objetivo combinar narrativa visual con tecnologías modernas.',
      demoLink: 'https://niallodev.github.io/Commic-El-Pacto-de-los-Espectros/',  // Enlace de la demo
      githubLink: 'https://github.com/niallodev/Commic-El-Pacto-de-los-Espectros', // Enlace de GitHub
      technologies: [<FaReact />, <FaCss3 />, <FaHtml5 />,  <FaGithub />, <FaBrain /> ], // Íconos de tecnologías
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2. Explica un desafío que resolviste o una característica destacada.',
      demoLink: '#',
      githubLink: '#',
      technologies: [<FaReact />, <FaDatabase />],
      // technologies: [<FaReact />],
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3. Incluye un logro o el impacto que tuvo este proyecto.',
      demoLink: '#',
      githubLink: '#',
      technologies: [<FaNodeJs />, <FaReact />],
      // technologies: [<FaNodeJs />],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true, // Para evitar el rebote al llegar al final del carrusel
    speed: 700, // Aumenta el tiempo para una transición más lenta
    slidesToShow: 3, // Cambia todos los slides visibles a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out', // Transición más fluida
    pauseOnHover: true, // Pausar el autoplay cuando el usuario pasa el cursor sobre el carrusel
    centerMode: true, // Centrar los elementos visibles
    centerPadding: '0px', // Espaciado entre elementos
    arrows: true, // Habilitar flechas
    fade: false,  // Efecto de desvanecimiento en vez de desplazamiento
    swipeToSlide: true, // Permite deslizar para cambiar
    touchThreshold: 15, // Sensibilidad al toque
    // variableWidth: true, // Para slides de ancho variable
    adaptiveHeight: true, // Ajusta el alto automáticamente según el contenido

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false // Desactiva flechas en pantallas pequeñas
        },
      },
    ],
  };
  
  
  return (
    <section id="projects" className="py-20 px-5 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-teal-600">Mis Proyectos</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 ease-in-out bg-white rounded-lg shadow-lg p-4 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="px-4 items-center">
              <Slider {...sliderSettings}>
                {project.technologies.map((tech, i) => (
                  <div key={i} className="text-4xl text-teal-600 flex justify-center items-center text-center">
                
                    <tech.type {...tech.props} className="m-auto" />
                    
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex justify-between">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800 flex items-center"
              >
                <FaEye className="mr-2" /> Ver Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-800 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
//! 173