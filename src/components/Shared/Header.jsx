import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [humberOpen, setHumberOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-content">
          <div className="lg-logo">
            <Link to="/">
              <img src="/logo/logo.png" alt="Logo" />
            </Link>
          </div>

          <nav className="lg-navbar">
            <ul className={`${isOpenMenu ? "showMenu" : ""}`}>
              <li>
                <NavLink to="#" end>
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Que es locatel Gold</NavLink>
              </li>
              <li>
                <NavLink to="#">Planes</NavLink>
              </li>
              <li>
                <NavLink to="#">Afiliación familiar</NavLink>
              </li>
            </ul>
          </nav>

          <div
            onClick={() => {
              setOpenMenu(!isOpenMenu);
            }}
            className="mobile-menu-icon"
          >
            <div
              onClick={() => {
                setHumberOpen(!humberOpen);
              }}
              className={`all-p-humber ${humberOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
