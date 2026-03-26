import { Link } from "react-router-dom";
import ResinaCard from "./ResinaCard";
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

function ResinaList() {
  return (
    <>
      <Header />{" "}
      <div className={`${styles["card-list"]}`}>
        {tercos.map((terco) => (
          <ResinaCard
            key={terco.id}
            nome={terco.nome}
            valor={terco.valor}
            imagem={terco.imagem}
            whatsappNumero={WHATSAPP_NUMERO}
          />
        ))}
      </div>
      <div className="d-flex alg-center jc-center margin16" >
        <Link to="/">
        <button className={styles.voltar}>Voltar</button>
      </Link>
      </div>
    </>
  );
}

export default ResinaList;
