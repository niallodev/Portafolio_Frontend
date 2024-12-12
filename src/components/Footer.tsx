import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Asegúrate de instalar react-icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="mb-4">
        <p>&copy; 2024 Nicolás Alexander Loor Bazurto. Todos los derechos reservados.</p>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/nicolas-loor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500 transition-colors">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-loor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500 transition-colors">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://twitter.com/nicolas_loor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500 transition-colors">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
      <div className="text-sm text-gray-400">
        <p>Diseñado y desarrollado por Nicolás Alexander Loor Bazurto</p>
      </div>
    </footer>
  );
}

export default Footer;
//! 41