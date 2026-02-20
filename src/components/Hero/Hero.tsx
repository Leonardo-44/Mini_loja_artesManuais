import "./Hero.css";
import "../../App.css";

function Hero() {
  return (
    <>
      <div className="hero d-flex jc-center alg-center">
        <div className=" d-flex fd-column txt-align gap16">
          <p>
            {" "}
            <span>ARTESANATO COM AMOR</span>{" "}
          </p>

          <h1>
            Arte feita à mão, <br />
            com fé e carinho
          </h1>

          <p>
            Descubra peças únicas de terços artesanais, artes em resina e <br />
            trabalhos em crochê. Cada criação carrega amor, dedicação e a beleza{" "}
            <br />
            do feito à mão.
          </p>

          <div className="d-flex alg-center jc-center gap16">
            <button className="btn-secondary">Ver Produtos</button>
            <a
              href="https://wa.me/5589999300439"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn-primary">Fale Conosco</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
