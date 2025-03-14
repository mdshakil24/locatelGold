import { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import "./faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open item is the first

  const items = [
    {
      title: "¿Cómo funciona Locatel Gold?",
      content:
        "Locatel Gold es una membresía exclusiva que te ofrece telemedicina ilimitada 24/7, descuentos en tiendas Locatel, asesoría nutricional, acumulación de puntos y asistencia médica en viajes, entre otros beneficios. Es la forma más fácil de acceder a la salud y el bienestar sin complicaciones. ",
    },
    {
      title: "¿Cuántas consultas médicas puedo tener?",
      content: "Consulta ilimitada con telemedicina 24/7.",
    },
    {
      title: "¿Puedo afiliar a mis familiares?",
      content: "Sí, puedes afiliar a miembros de tu familia.",
    },
    {
      title: "¿Cómo accedo a los descuentos en tiendas Locatel?",
      content: "Presentando tu membresía Locatel Gold.",
    },
    {
      title: "¿Cómo se acumulan los puntos SoyLocatel?",
      content: "Comprando en tiendas Locatel con tu membresía.",
    },
    {
      title: "¿En qué consiste la asistencia médica viajera?",
      content: "Cobertura médica en viajes nacionales e internacionales.",
    },
    {
      title: "¿Cuáles laboratorios están incluidos en los descuentos?",
      content: "Consulta la lista en la app de Locatel.",
    },
    {
      title: "¿Cómo puedo acceder a los descuentos en laboratorios clínicos?",
      content: "Mostrando tu membresía en laboratorios afiliados.",
    },
    {
      title: "¿Puedo cambiar mi plan después de contratarlo?",
      content: "Sí, puedes cambiar tu plan cuando lo necesites.",
    },
    {
      title: "¿Qué tipo de atención incluye el plan Premium?",
      content: "Beneficios adicionales en salud y bienestar.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close behavior
  };

  return (
    <section className="faq--section">
      <div className="container">
        <div className="faq--header">
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos tus dudas sobre Locatel Gold</p>
        </div>
        <div className="faq-container">
          {items.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
