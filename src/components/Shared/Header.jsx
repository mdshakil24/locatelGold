import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-content">
          <div className="lg-logo">
            <a href="#"><img src="/public/logo/logo.png" alt="Logo" /></a>
          </div>

          <nav className="lg-navbar">
            <ul>
              <li>
                <NavLink to="#" end>
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  Que es locatel Gold
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  Planes
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  Afiliación familiar
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
