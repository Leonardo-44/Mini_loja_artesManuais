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
              <a href="#produtos">
                <li>Produtos</li>
              </a>
              <a href="#sobre">
                <li>Sobre</li>
              </a>
              <button className="btn-primary">Contato</button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
