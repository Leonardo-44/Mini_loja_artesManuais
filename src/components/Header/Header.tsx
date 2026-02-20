import "./Header.css";
import "../../App.css";

function Header() {
  return (
    <>
      <div className="header d-flex">
        <div className="container d-flex alg-center jc-between">
          <div>
            <h3 className="title">Artes Manuais</h3>
          </div>
          <div>
            <ul className="d-flex gap16 jc-center alg-center">
              <a href="#products">
                <li>Produtos</li>
              </a>
              <a href="#about">
                <li>Sobre</li>
              </a>
              <a
                href="https://wa.me/5589999300439"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-primary">Contato</button>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
