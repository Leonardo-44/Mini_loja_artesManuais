import { useState } from "react";
import "./Header.css";
import "../../App.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <div className="header d-flex">
        <div className="container d-flex alg-center jc-between">
          <div>
            <a href="/">
              <h3 className="title">Artes Manuais</h3>
            </a>
          </div>

          <button
            className="hamburguer"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            <span className={`barra ${menuAberto ? "aberta" : ""}`}></span>
            <span className={`barra ${menuAberto ? "aberta" : ""}`}></span>
            <span className={`barra ${menuAberto ? "aberta" : ""}`}></span>
          </button>

          <ul className={`nav-links d-flex alg-center jc-center gap16 ${menuAberto ? "nav-aberta" : ""}`}>
            <a href="#products" onClick={() => setMenuAberto(false)}>
              <li>Produtos</li>
            </a>
            <a href="#about" onClick={() => setMenuAberto(false)}>
              <li>Sobre</li>
            </a>
            <a
              href="https://wa.me/5589999300439"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAberto(false)}
            >
              <button className="btn-primary">Contato</button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
