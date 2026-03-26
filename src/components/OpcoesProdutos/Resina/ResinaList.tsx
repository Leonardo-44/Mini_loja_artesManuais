import { Link } from "react-router-dom";
import ResinaCard from "./ResinaCard";
import Img from "../../../assets/react.svg";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

// Imagens Produtos

const WHATSAPP_NUMERO: string = "5589999300439";

const tercos = [
  {
    id: 1,
    nome: "Terço de Nossa Senhora",
    valor: "Valor Via Whatsapp",
    imagem: Img,
    variacoes: [
      // {imagem: img}
    ],
  },
];

function ResinaList() {
  return (
    <>
      <Header />{" "}
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Itens em Resina</h1>
      </div>
      <div className={`${styles["card-list"]}`}>
        {tercos.map((resina) => (
          <ResinaCard
            key={resina.id}
            nome={resina.nome}
            valor={resina.valor}
            imagem={resina.imagem}
            variacoes={resina.variacoes}
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
