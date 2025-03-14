import { IoMdStar } from "react-icons/io";

const Hero = () => {
  return (
    <section className="lg-hero-area">
      {/*===== Start Hero Slide Area =====*/}
      <div className="lg-hero-slide-area">
        <div className="container">
          <div className="lg-hero-slide-content">
            <div className="lg-hero-left-slide">
              <h1 className="font-gotham">
                Salud sin límites <br />
                para ti y tu familia <br />
                Disponible 24/7{" "}
              </h1>
              <p className="font-gotham">
                Accede a consultas médicas ilimitadas, descuentos exclusivos,
                acumulación de puntos y mucho más con Locatel Gold.
              </p>
              <div className="button">
                <a href="#">¡Afíliate a Locatel Gold!</a>
              </div>
              <div className="lg-hero-left-bottom-content">
                <div className="lg-hero-left-btm-img">
                  <img src="/public/home/1.png" alt="image" />
                  <img src="/public/home/1.png" alt="image" />
                  <img src="/public/home/1.png" alt="image" />
                </div>
                <div className="lg-hero-left-btm-content">
                  <ul>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                  </ul>
                  <p>Más de 2000 usuarios activos</p>
                </div>
              </div>
            </div>
            <div className="lg-hero-right-slide">
              <img src="/public/home/hero1.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
      {/*===== End Hero Slide Area =====*/}

      {/*===== Start Hero Bottom Area =====*/}
      <div className="lg-hero-bottom-area">
        <div className="container">
          <div className="lg-hero-bottom-content">
            <div className="lg-hero-bottom-left-content">
              <p>LOCATEL GOLD</p>
              <p>Salud y bienestar sin límites. </p>
            </div>
            <div className="lg-hero-bottom-right-content">
              <div className="button">
                <a href="#">¡Afiliate a Locatel Gold!</a>
              </div>
              <div className="button">
                <a href="#">Conoce los beneficisos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== End Hero Bottom Area =====*/}
    </section>
  );
};

export default Hero;
