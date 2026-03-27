import { Link } from "react-router-dom";

import "./Products.css";
import "../../App.css";

//Icons
import TercoIcon from "../../icons/TercoIcon.png";
import ResinaIcon from "../../icons/ResinaIcon.png";
import PulseiraIcon from "../../icons/PulseiraIcon.png";
import TapeteIcon from "../../icons/TapeteIcon.png";
import ChaveiroIcon from "../../icons/ChaveiroIcon.png";

function Products() {
  return (
    <div id="products">
      <div className="products d-flex fd-column jc-center alg-center">
        <div className="txt-align d-flex fd-column gap8 margin-bottom">
          <p className="dstq-p">CATALÓGO</p>
          <h2>Nossos Produtos</h2>
          <p>Itens Artesanais</p>
        </div>
        <div className=" cards container d-flex jc-between">
          <Link to={"/tercos"}>
            <div className="card-products">
              <div className="gap8 d-flex fd-column alg-center jc-center">
                <img src={TercoIcon} alt="Terço ícone" className="iconsProducts"/>
                <h3>Terços</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
          <Link to="/resina">
            <div className="card-products">
              <div className="gap8 d-flex fd-column alg-center jc-center">
                <img src={ResinaIcon} alt="Resina ícone" className="iconsProducts"/>
                <h3>Resina</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
          <Link to="/pulseiras">
            <div className="card-products">
              <div className="gap8 d-flex fd-column alg-center jc-center">
                <img src={PulseiraIcon} alt="Pulseira ícone" width="50px"/>
                <h3>Pulseiras</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>

          <Link to="/tapetes">
            <div className="card-products">
              <div className="gap8 d-flex fd-column alg-center jc-center">
                <img src={TapeteIcon} alt="Tapete ícone" className="iconsProducts"/>
                <h3>Tapetes</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>

           <Link to="/chaveiros">
            <div className="card-products">
              <div className="gap8 d-flex fd-column alg-center jc-center">
                <img src={ChaveiroIcon} alt="Chaveiro ícone" className="iconsProducts"/>
                <h3>Chaveiros</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
