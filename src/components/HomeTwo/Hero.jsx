import { IoMdStar } from "react-icons/io";
import SwiperComponent from "../SwiperComponent";

const Hero = () => {
  return (
    <section className="lg-hero-area">
      {/*===== Start Hero Slide Area =====*/}
      <div className="lg-hero-slide-area">
        <div className="container">
          <SwiperComponent>
            <div className="lg-hero-slide-content">
              <div className="lg-hero-left-slide">
                <h1 className="font-gotham">
                  Atención Médica 24/7 para tus Seres Queridos
                </h1>
                <p className="font-gotham">
                  Con Locatel ATIEMPO, tus familiares acceden a consultas
                  médicas ilimitadas desde la comodidad de su hogar.
                </p>
                <div className="button">
                  <a href="#">Afíliate Ahora</a>
                </div>
                <div className="lg-hero-left-bottom-content">
                  <div className="lg-hero-left-btm-img">
                    <img src="/home/1.png" alt="image" />
                    <img src="/home/1.png" alt="image" />
                    <img src="/home/1.png" alt="image" />
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
                <img src="/home-two/hero.png" alt="Image" />
              </div>
            </div>
            <div className="lg-hero-slide-content">
              <div className="lg-hero-left-slide">
                <h1 className="font-gotham">
                  Atención Médica 24/7 para tus Seres Queridos
                </h1>
                <p className="font-gotham">
                  Con Locatel ATIEMPO, tus familiares acceden a consultas
                  médicas ilimitadas desde la comodidad de su hogar.
                </p>
                <div className="button">
                  <a href="#">Afíliate Ahora</a>
                </div>
                <div className="lg-hero-left-bottom-content">
                  <div className="lg-hero-left-btm-img">
                    <img src="/home/1.png" alt="image" />
                    <img src="/home/1.png" alt="image" />
                    <img src="/home/1.png" alt="image" />
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
                <img src="/home-two/hero.png" alt="Image" />
              </div>
            </div>
          </SwiperComponent>
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
