import { Link } from "react-router-dom";
import PulseirasCard from "./PulseirasCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

//Imagem Produtos
import PulseiraMacrame from "../../../images/Pulseiras/PulseiraMacrame.png";
import PulseiraDezena from "../../../images/Pulseiras/PulseiraDezena.png";
import TercoPulseira from "../../../images/Pulseiras/TercoPulseira.png";

const WHATSAPP_NUMERO: string = "5589999300439";

const pulseiras = [
  {
    id: 1,
    nome: "Pulseira Macramê",
    valor: "Valor Via Whatsapp",
    imagem: PulseiraMacrame,
  },
  {
    id: 2,
    nome: "Pulseira Dezena",
    valor: "Valor Via Whatsapp",
    imagem: PulseiraDezena,
  },
  {
    id: 3,
    nome: "Terço Pulseira",
    valor: "Valor Via Whatsapp",
    imagem: TercoPulseira,
  },
];

function PulseirasList() {
  return (
    <>
      <Header />{" "}
      <div className={`${styles["card-list"]}`}>
        {pulseiras.map((terco) => (
          <PulseirasCard
            key={terco.id}
            nome={terco.nome}
            valor={terco.valor}
            imagem={terco.imagem}
            whatsappNumero={WHATSAPP_NUMERO}
          />
        ))}
      </div>
      <Link className="d-flex alg-center jc-center" to="/">
        <button className="btn-secondary">Voltar</button>
      </Link>
    </>
  );
}

export default PulseirasList;
