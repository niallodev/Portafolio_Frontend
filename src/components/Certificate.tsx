function Certificate () {
    const certificates = [
        {
            title: "[New] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
            issuer: "Udemy",
            date: "Mayo 2025",
            link: "https://www.udemy.com/certificate/UC-f598d7fd-6627-4a6c-b6b4-1427289a0d12/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_MkobRjsuMfSSp3eubAZ3OFrGXGj95kzwmizFzY3HhUrgOEeCvBLPQUNUEykULsdmMc&usqp=CAU",
        },
        // más certificados...
    ];
    
    return (
    <section id="certificates" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-teal-700">
          Certificaciones & Cursos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cert.image}
                alt={`${cert.issuer} logo`}
                className="h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
    );

}
export default Certificate;