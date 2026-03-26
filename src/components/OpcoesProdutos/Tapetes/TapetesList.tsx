import { Link } from "react-router-dom";
import TapetesCard from "./TapetesCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import KitPassadeira from "../../../images/Tapetes/KitPassadeira.png";
import KitPassadeiraDois from "../../../images/Tapetes/KItPassadeira2.png";
import TapeteOval from "../../../images/Tapetes/TapeteOval.png";
import TapeteOvalDois from "../../../images/Tapetes/TapeteOval2.png";
import TrilhoDeMesaRealeza from "../../../images/Tapetes/TrilhodeMesaRealeza.png";

const WHATSAPP_NUMERO: string = "5589999300439";

const tapetes = [
  {
    id: 1,
    nome: "Kit Passadeira",
    valor: "Valor e Cores Via Whatsapp",
    imagem: KitPassadeira,
    variacoes: [
      { imagem: KitPassadeiraDois },
    ],
  },
  {
    id: 2,
    nome: "Tapete Oval",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TapeteOval,
    variacoes: [
      { imagem: TapeteOvalDois },
    ],
  },
  {
    id: 3,
    nome: "Trilho de Mesa Realeza",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TrilhoDeMesaRealeza,
  },
];

function TapetesList() {
  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Tapetes</h1>
      </div>
      <div className={styles["card-list"]}>
        {tapetes.map((tapete) => (
          <TapetesCard
            key={tapete.id}
            nome={tapete.nome}
            valor={tapete.valor}
            imagem={tapete.imagem}
            variacoes={tapete.variacoes}
            whatsappNumero={WHATSAPP_NUMERO}
          />
        ))}
      </div>
      <div className="d-flex alg-center jc-center margin16">
        <Link to="/">
          <button className={styles.voltar}>Voltar</button>
        </Link>
      </div>
    </>
  );
}

export default TapetesList;