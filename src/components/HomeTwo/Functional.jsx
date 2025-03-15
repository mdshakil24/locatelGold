

const Functional = () => {
    return (
        <section className="lg-functional-area">
            <div className="lg-functional-heading">
                <h2>¿Cómo Funciona Locatel ATIEMPO?</h2>
            </div>

            <div className="lg-plans-listing">
                <div className="container">
                    <div className="lg-plans-listing-content">

                        <div className="single-lg-plans-listing">
                            <span>1</span>
                            <div>
                                <p className="title">Regístrate: </p>
                                <p>Completa el formulario de afiliación en línea.</p>
                            </div>

                        </div>

                        <div className="single-lg-plans-listing">
                            <span>2</span>
                            <div>
                                <p className="title">Descarga la App:  </p>
                                <p>Disponible en Google Play y App Store.</p>
                            </div>
                        </div>


                        <div className="single-lg-plans-listing">
                            <span>3</span>
                            <p>Inicia sesión y solicita consultas médicas en cualquier momento.</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container">
                <div className="lg-functional-content">
                    <div className="lg-functional-video-content">
                        <iframe src="https://www.youtube.com/embed/qzzTWrmzJl8?si=XIlDs1Hom9CDg7dP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p>El acceso a Locatel ATIEMPO requiere una suscripción a Locatel Gold. Si eres miembro Gold, puedes inscribir a tus familiares de primer grado de consanguinidad. Los menores de edad solo pueden ser registrados por un adulto afiliado a Locatel Gold</p>
                    <div className="lg-functional-buttons">
                        <a href="#"><img src="/public/home-two/gp.png" alt="Image" /></a>
                        <a href="#"><img src="/public/home-two/as.png" alt="Image" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Functional;