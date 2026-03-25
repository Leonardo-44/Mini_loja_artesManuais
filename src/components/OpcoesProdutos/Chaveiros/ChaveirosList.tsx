import { Link } from "react-router-dom";
import ChaveirosCard from "./ChaveirosCard";
import Img from "../../../assets/react.svg";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

const WHATSAPP_NUMERO: string = "5589999300439";

const tercos = [
  {
    id: 1,
    nome: "Terço de Nossa Senhora",
    valor: "Valor Via Whatsapp",
    imagem: Img,
  },
];

function ChaveirosList() {
  return (
    <>
      <Header />{" "}
      <div className={`${styles["card-list"]}`}>
        {tercos.map((terco) => (
          <ChaveirosCard
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

export default ChaveirosList;
