import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube  } from "react-icons/fa";
import { FaThreads, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="lg-footer-area">
      <div className="container">
        <div className="lg-footer-content">

          {/*===== Start footer top content =====*/}
          <div className="lg-footer-top-content">
            {/* single item */}
            <div className="single-top-content">
              <p>Afíliate hoy y accede a un mundo
                de bienestar con Locatel Gold</p>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-top-content">
              <a href="#">QUIENES SOMOS</a>
              <a href="#">PREGUNTAS FRECUENTES</a>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-top-content">
              <a href="#">SOYLOCATEL</a>
              <a href="#">LOCATEL VIP</a>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-top-content">
              <a href="#">POLÍTICA DE PRIVACIDAD</a>
              <a href="#">POLÍTICA DE CALIDAD</a>
            </div>
            {/* single item */}
          </div>
          {/*===== End footer top content =====*/}

          {/*===== Start footer bottom content =====*/}
          <div className="lg-footer-bottom-content">
            <div className="footer-bottom-left-content">
              <p>Síguenos en nuestras redes sociales</p>
            </div>
            <div className="footer-bottom-right-content">
              <ul>
                <li><a href="#">{<FaInstagram />}</a></li>
                <li><a href="#">{<FaFacebookF />}</a></li>
                <li><a href="#">{<FaTiktok />}</a></li>
                <li><a href="#">{<FaThreads />}</a></li>
                <li><a href="#">{<FaXTwitter />}</a></li>
                <li><a href="#">{<FaYoutube />}</a></li>
                <li><a href="#">{<FaLinkedinIn />}</a></li>
                
              </ul>
            </div>
          </div>
          {/*===== End footer bottom content =====*/}


        </div>
      </div>
    </footer>
  );
}
