import React from "react";

const benefits = [
    {
        id: 1,
        icon: "/icons/locatelGold/i1.png",
        title: "Consultas médicas 24/7 ilimitadas",
    },
    {
        id: 2,
        icon: "/icons/locatelGold/i2.png",
        title: "Asistencia médica viajera 24/7",
    },
    {
        id: 3,
        icon: "/icons/locatelGold/i3.png",
        title: "Domicilio gratuito en compras superiores a $50.000",
    },
    {
        id: 4,
        icon: "/icons/locatelGold/i4.png",
        title: "Acumulación de puntos SoyLocatel",
    },
    {
        id: 5,
        icon: "/icons/locatelGold/i5.png",
        title: "Asesoría y seguimiento nutricional personalizado",
    },
    {
        id: 6,
        icon: "/icons/locatelGold/i6.png",
        title: "Descuentos exclusivos en laboratorios clínicos",
    },
    {
        id: 7,
        icon: "/icons/locatelGold/i7.png",
        title: "Alquiler de equipos médicos sin depósito en garantía",
    },
];

const LocatelGold = () => {

    return (
        <section className="locatelgold-area">
            <div className="container">
                <div className="locatelgold-content">
                    <h2>Locatel Gold: Salud y bienestar sin límites</h2>
                    <p>
                    Locatel Gold es una membresía exclusiva diseñada para brindarte acceso ilimitado a servicios de salud, bienestar y beneficios en Locatel. Con esta suscripción, disfrutas de telemedicina 24/7 sin límites, descuentos exclusivos en nuestras tiendas, acumulación de puntos, asesoría nutricional, asistencia médica en viajes y mucho más.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                        {benefits.map((benefit) => (
                            <div className="single-locatel-gold" style={{ flex: "0 0 20%", textAlign: "center", }}
                                key={benefit.id}
                            >
                                <img src={benefit.icon} alt="icon" />
                                <p>{benefit.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="locatelgold-bottom-logo">
                    <img src="/public/icons/locatelGold/ii1.png" alt="logo" />
                    <img src="/public/icons/locatelGold/ii2.png" alt="logo" />
                </div>
            </div>
        </section>


    );
};

export default LocatelGold;
