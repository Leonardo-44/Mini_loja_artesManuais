import "./About.css";
import "../../App.css";

//ICONS
import Star from "../../icons/stars.svg";
import FLower from "../../icons/flower.svg";
import Heart from "../../icons/heart.svg"

function About() {
  return (
    <>
      <div className="about d-flex jc-center alg-center fd-column">
        <div className="txt-align d-flex fd-column gap8 margin-bottom">
          <p className="dstq-p">SOBRE NÓS</p>
          <h2>
            Cada Peça Conta <br />{" "}
            <span className="destaque">Uma História</span>
          </h2>
          <p>
            Somos apaixonados pela arte feita à mão. Cada terço, cada peça em{" "}
            <br />
            resina, cada chaveiro é criado com dedicação e atenção aos detalhes.{" "}
            <br />
            Trabalhamos com materiais selecionados — pedras naturais, flores{" "}
            <br />
            secas, resina cristalina e muito carinho — para entregar peças
            únicas <br />
            que carregam significado e beleza.
          </p>
        </div>
        <div className="d-flex gap32">
          <div className="d-flex fd-column txt-align jc-center alg-center gap8">
            <img src={Star} alt="Star" width="32px" />
            <h4>Feito à Mão</h4>
            <p>
              Cada peça é única e <br />
              produzida artesanalmente
            </p>
          </div>
          <div className="d-flex fd-column txt-align jc-center alg-center gap8">
            <img src={Heart} alt="Star" width="32px" />
            <h4>Com Amor</h4>
            <p>
              Dedicação e Carinho <br />
              em cada detalhe
            </p>
          </div>
          <div className="d-flex fd-column txt-align jc-center alg-center gap8">
            <img src={FLower} alt="Star" width="32px" />
            <h4>FMatériais de Qualidade</h4>
            <p>
             Pedra, linhas e resinas <br />
             de Alta Qualidade
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
