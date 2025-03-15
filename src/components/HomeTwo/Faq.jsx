import { useState } from "react";
import Accordion from "../Accordion/Accordion";

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
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close behavior
  };

  return (
    <section className="faq--section faq-two">
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
