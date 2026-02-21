import { Link } from "react-router-dom";

import "./Products.css";
import "../../App.css";

function Products() {
  return (
    <>
      <div
        className="products d-flex fd-column jc-center alg-center"
        id="products"
      >
        <div className="txt-align d-flex fd-column gap8 margin-bottom">
          <p className="dstq-p">CATALÓGO</p>
          <h2>Nossos Produtos</h2>
          <p>Itens Artesanais</p>
        </div>
        <div className="container d-flex jc-between">
          <Link to={"/tercos"}>
            <div className="card-products">
              <div className="gap8">
                <h3>Terços</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
          <Link to="/resina">
            <div className="card-products">
              <div className="gap8">
                <h3>Resina</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
          <Link to="/pulseiras">
            <div className="card-products">
              <div className="gap8">
                <h3>Pulseiras</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>

          <Link to="/tapetes">
            <div className="card-products">
              <div className="gap8">
                <h3>Tapetes</h3>
                <h6 className="fonte-cinza">Ver Coleção &#8594;</h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Products;
