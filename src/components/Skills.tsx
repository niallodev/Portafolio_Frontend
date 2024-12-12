import { FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Asegúrate de instalar react-icons

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare className="text-4xl" />, bgColor: 'from-yellow-500 to-yellow-700' },
    { name: 'React', icon: <FaReact className="text-4xl" />, bgColor: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" />, bgColor: 'from-green-500 to-green-700' },
    { name: 'SQL Server', icon: <FaDatabase className="text-4xl" />, bgColor: 'from-gray-600 to-gray-800' },
    { name: 'Python', icon: <FaPython className="text-4xl" />, bgColor: 'from-yellow-600 to-blue-600' },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl" />, bgColor: 'from-blue-400 to-blue-600' },
    { name: 'HTML', icon: <FaHtml5 className="text-4xl" />, bgColor: 'from-orange-500 to-orange-700' }
  ];

  return (
    <section id="skills" className="py-20 px-5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-white">Mis Habilidades</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`transform transition-all duration-300 ease-in-out bg-gradient-to-r ${skill.bgColor} text-white py-6 px-4 rounded-xl shadow-lg hover:scale-105 hover:rotate-3 hover:shadow-2xl`}
          >
            <div className="flex justify-center mb-4">
              {skill.icon}
            </div>
            <h4 className="font-semibold text-lg">{skill.name}</h4>
            <p className="text-gray-200 mt-2">Conocimiento básico y práctico de {skill.name} para desarrollo web y aplicaciones.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
//! 96