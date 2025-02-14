import { FaJsSquare, FaNodeJs, FaPython, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaSitemap } from 'react-icons/fa';
import { SiSharp, SiDjango, SiDotnet, SiTailwindcss, SiMysql, SiPostgresql } from 'react-icons/si';
import Slider from 'react-slick';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare className="text-4xl" />, bgColor: 'from-yellow-400 to-yellow-600', texto: 'Lenguaje de programación esencial para crear páginas web dinámicas e interactivas.' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" />, bgColor: 'from-green-600 to-green-800', texto: 'Entorno de ejecución de JavaScript en el servidor, ideal para construir aplicaciones escalables y de alto rendimiento.' },
    { name: 'Python', icon: <FaPython className="text-4xl" />, bgColor: 'from-yellow-600 to-blue-600', texto: 'Lenguaje de alto nivel, reconocido por su legibilidad y versatilidad en desarrollo web, automatización y análisis de datos.' },
    { name: 'C#', icon: <SiSharp className="text-4xl" />, bgColor: 'from-purple-600 to-purple-800', texto: 'Lenguaje orientado a objetos de Microsoft, utilizado en el ecosistema .NET para desarrollar aplicaciones web, de escritorio y móviles.' },
    { name: 'Django', icon: <SiDjango className="text-4xl" />, bgColor: 'from-green-600 to-green-800', texto: 'Framework web de Python que facilita el desarrollo rápido y seguro de aplicaciones con un enfoque en la reutilización de código.' },
    { name: 'ASP.NET Core MVC', icon: <SiDotnet className="text-4xl" />, bgColor: 'from-purple-700 to-purple-900', texto: 'Framework de Microsoft para crear aplicaciones web modernas, robustas y escalables utilizando el patrón Modelo-Vista-Controlador.' },
    { name: 'React', icon: <FaReact className="text-4xl" />, bgColor: 'from-blue-400 to-blue-600', texto: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables en aplicaciones web.' },
    { name: 'SQL Server', icon: <FaDatabase className="text-4xl" />, bgColor: 'from-gray-600 to-gray-800', texto: 'Sistema de gestión de bases de datos relacional de Microsoft, ideal para entornos empresariales que requieren alta seguridad y rendimiento.' },
    { name: 'MySQL', icon: <SiMysql className="text-4xl" />, bgColor: 'from-gray-600 to-gray-800', texto: 'Sistema de gestión de bases de datos relacional de código abierto, popular por su fiabilidad y eficiencia en el manejo de datos.' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-4xl" />, bgColor: 'from-gray-600 to-gray-800', texto: 'Base de datos relacional de código abierto conocida por su robustez, extensibilidad y cumplimiento de estándares SQL avanzados.' },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl" />, bgColor: 'from-orange-500 to-orange-700', texto: 'Lenguaje de marcado que estructura el contenido web, incorporando nuevas etiquetas semánticas y características multimedia.' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl" />, bgColor: 'from-blue-400 to-blue-600', texto: 'Lenguaje de estilos que define la presentación visual de las páginas web, permitiendo diseños modernos y responsivos.' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl" />, bgColor: 'from-indigo-500 to-indigo-700', texto: 'Framework frontend que agiliza el diseño de sitios web responsivos mediante componentes predefinidos y un sistema de grillas.' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl" />, bgColor: 'from-teal-400 to-teal-600', texto: 'Framework CSS basado en utilidades que permite crear diseños personalizados de manera rápida sin escribir CSS desde cero.' },
    { name: 'Git', icon: <FaGitAlt className="text-4xl" />, bgColor: 'from-red-500 to-red-700', texto: 'Sistema de control de versiones distribuido que permite gestionar y registrar cambios en el código, facilitando el trabajo colaborativo.' },
    { name: 'GitHub', icon: <FaGithub className="text-4xl" />, bgColor: 'from-gray-700 to-gray-900', texto: 'Plataforma de alojamiento para repositorios Git que facilita la colaboración y gestión de proyectos de software.' },
    { name: 'Scrum', icon: <FaSitemap className="text-4xl" />, bgColor: 'from-yellow-800 to-green-800', texto: 'Metodología ágil que organiza el trabajo en iteraciones, promoviendo la colaboración, flexibilidad y mejora continua.' },
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
    centerPadding: '3px', // Espaciado entre elementos
    arrows: false, // Habilitar flechas
    fade: false,  // Efecto de desvanecimiento en vez de desplazamiento
    swipeToSlide: true, // Permite deslizar para cambiar
    touchThreshold: 15, // Sensibilidad al toque
  
    adaptiveHeight: true, // Ajusta el alto automáticamente según el contenido

    responsive: [
     
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
  
        },
      },
    ],
  };


  return (
    <section id="skills" className="max-sm:px-10 py-20 px-5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-white">Mis Habilidades</h2>
      {/* <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"> */}
      <div className="py-5 items-center">
        <Slider {...sliderSettings}>
          {skills.map((skill, index) => (

          <div key={index} className="px-1">
            <div key={index} className={`h-80 max-sm:{h-64}  flex flex-col justify-center items-center bg-gradient-to-r ${skill.bgColor} text-white py-6 px-4 rounded-xl shadow-lg hover:scale-105 hover:rotate-3 hover:shadow-2xl transition-all duration-300`}>
              <div className="mb-4">{skill.icon}</div>
              <h4 className="font-semibold text-lg">{skill.name}</h4>
              <p className="text-gray-200 mt-2">{skill.texto}</p>
            </div>

          </div>
          ))}
        </Slider>
      </div>


      {/* {skills.map((skill, index) => (
          <div
            key={index}
            className={`transform transition-all duration-300 ease-in-out bg-gradient-to-r ${skill.bgColor} text-white py-6 px-4 rounded-xl shadow-lg hover:scale-105 hover:rotate-3 hover:shadow-2xl`}
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>
            <h4 className="font-semibold text-lg">{skill.name}</h4>
            <p className="text-gray-200 mt-2">{skill.texto}</p>
          </div>
        ))} */}
      {/* </div> */}
    </section>
  );
}

export default Skills;
//! 96