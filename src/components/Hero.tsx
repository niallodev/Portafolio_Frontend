function Hero() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-20 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-300 to-transparent w-72 h-72 rounded-full blur-3xl opacity-50 animate-float1 absolute top-10 left-10"></div>
        <div className="bg-gradient-to-r from-purple-300 to-transparent w-96 h-96 rounded-full blur-3xl opacity-50 animate-float2 absolute bottom-10 right-10"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Imagen */}
        <img
          // src="https://unavatar.io/niallodev"
          src="Perfil.png"
          alt="Foto de Nicolás"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-white hover:scale-105 transition"
        />

        {/* Texto */}
        <div>
          <h1 className="text-5xl font-bold opacity-0 animate-fadeIn">
            ¡Hola! Soy Nicolás Alexander
          </h1>
          <p className="mt-4 text-xl opacity-0 animate-fadeIn delay-500">
            Desarrollador de Software | Ingeniero en TI
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition transform hover:scale-105 active:scale-95 opacity-0 animate-fadeIn delay-1000"
          >
            Contáctame
          </a>
        </div>
      </div>

      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </header>
  );
}

export default Hero;
//! 173