import { useState } from 'react';

function NavBar() {
  // Estado para manejar la visibilidad del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center w-full px-6">
        <h1 className="text-2xl font-bold hover:scale-110 transition-transform duration-300 cursor-pointer">
          Nicolás Loor
        </h1>
        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#about"
              className="hover:text-gray-200 hover:underline transition-all duration-300"
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-200 hover:underline transition-all duration-300"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-200 hover:underline transition-all duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-200 hover:underline transition-all duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-blue-600 text-white p-4 space-y-6 flex flex-col items-center`}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="#about"
              className="block text-lg hover:text-gray-200 hover:underline transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-lg hover:text-gray-200 hover:underline transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-lg hover:text-gray-200 hover:underline transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg hover:text-gray-200 hover:underline transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al hacer clic
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
//!146