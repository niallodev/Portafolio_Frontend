import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import { profile } from '../data/site';

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
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: '',
  });
  
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
    setStatus({ type: 'idle', text: '' });

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
        setStatus({ type: 'success', text: 'Mensaje enviado. Te responderé lo antes posible.' });
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        setStatus({ type: 'error', text: 'No pude enviar el mensaje. Intenta de nuevo en unos minutos.' });
      }
      } catch (error) {
      setStatus({ type: 'error', text: 'Error de conexión. Intenta más tarde.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-[2.5rem] border border-ink-900/10 bg-sand-50/70 p-6 shadow-soft md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-copper-600">
                Contacto
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
                Hablemos de tu vacante.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Si te interesa mi perfil, escríbeme por correo o LinkedIn. También puedes usar el formulario.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-sand-200/70"
                >
                  <FaEnvelope aria-hidden="true" /> {profile.email}
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-sand-200/70"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm font-semibold text-ink-900 shadow-soft transition hover:bg-sand-200/70"
                  >
                    <FaLinkedinIn aria-hidden="true" /> LinkedIn
                  </a>
                </div>
              </div>

              {status.type !== 'idle' ? (
                <div
                  className={[
                    'mt-6 rounded-2xl border px-4 py-3 text-sm font-semibold',
                    status.type === 'success'
                      ? 'border-tealish-500/30 bg-tealish-500/10 text-tealish-600'
                      : 'border-copper-500/30 bg-copper-500/10 text-copper-600',
                  ].join(' ')}
                >
                  {status.text}
                </div>
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] bg-sand-100 p-6 shadow-soft">
              <div className="grid gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink-600">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm text-ink-900 shadow-soft outline-none transition focus:border-tealish-500/40 focus:ring-4 focus:ring-tealish-500/15"
                  />
                  {errors.name ? (
                    <p className="mt-2 text-xs font-semibold text-copper-600">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink-600">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="mt-2 w-full rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm text-ink-900 shadow-soft outline-none transition focus:border-tealish-500/40 focus:ring-4 focus:ring-tealish-500/15"
                  />
                  {errors.email ? (
                    <p className="mt-2 text-xs font-semibold text-copper-600">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink-600">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuentame sobre la vacante, el stack y el alcance..."
                    className="mt-2 w-full resize-none rounded-xl border border-ink-900/10 bg-sand-50 px-4 py-3 text-sm text-ink-900 shadow-soft outline-none transition focus:border-tealish-500/40 focus:ring-4 focus:ring-tealish-500/15"
                    rows={5}
                  />
                  {errors.message ? (
                    <p className="mt-2 text-xs font-semibold text-copper-600">{errors.message}</p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={[
                    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-soft transition',
                    isSubmitting
                      ? 'cursor-not-allowed bg-ink-900/40 text-sand-50'
                      : 'bg-ink-900 text-sand-50 hover:bg-ink-950',
                  ].join(' ')}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                <p className="text-xs text-ink-600">
                  Al enviar, aceptas compartir tu nombre/correo solo para responderte.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
//! 184
