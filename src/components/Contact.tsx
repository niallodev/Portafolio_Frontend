import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Validación
  const validate = () => {
    let errors: FormErrors = {};
    // Validación del nombre
    if (!name || name.trim().length === 0) {
      errors.name = "El nombre es obligatorio y no puede estar vacío.";
    } else if (name.trim().length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    } else if (name.trim().length > 100) {
      errors.name = "El nombre no puede exceder los 100 caracteres.";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
      errors.name = "El nombre solo puede contener letras y espacios.";
    }

    // Validación del correo
    if (!email || email.trim().length === 0) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Por favor, ingresa un correo válido.";
    }

    // Validación del mensaje
    if (!message || message.trim().length === 0) {
      errors.message = "El mensaje no puede estar vacío.";
    } else if (message.trim().length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres.";
    } else if (message.trim().length > 300) {
      errors.message = "El mensaje no puede exceder los 300 caracteres.";
    } else if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?]+$/.test(message.trim())) {
      errors.message = "El mensaje solo puede contener letras, números, espacios y los caracteres .,!?";
    }

  return errors;
  };

  // Manejo del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Configurar un temporizador para ocultar los mensajes de error después de 5 segundos
      setTimeout(() => {
        setErrors({});
      }, 5000);
      return;
    }
    setIsSubmitting(true);
    // Envío del correo con EmailJS
    try {
      const response = await fetch("https://portafolio-backend-2nlw.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Mensaje enviado exitosamente!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Error al conectar con el servidor. Por favor, intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-5 bg-gradient-to-r from-teal-400 to-blue-500 text-black text-center">
      <h2 className="text-4xl font-extrabold mb-8">Contacto</h2>
      <form className="mt-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensaje"
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all"
            rows={4}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-teal-500'} text-white py-3 rounded-lg hover:bg-teal-600 transition-all`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
//! 184