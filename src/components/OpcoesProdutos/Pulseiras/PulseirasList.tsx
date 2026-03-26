import { Link } from "react-router-dom";
import PulseirasCard from "./PulseirasCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

// Imagens Produtos
import PulseiraMacrame from "../../../images/Pulseiras/PulseiraMacrame.png";

import PulseiraDezena from "../../../images/Pulseiras/PulseiraDezena.png";
import PulseiraDezena2 from "../../../images/Pulseiras/PulseiraDezena2.png";
import PulseiraDezena3 from "../../../images/Pulseiras/PulseiraDezena3.png";

import TercoPulseira from "../../../images/Pulseiras/TercoPulseira.png";

const WHATSAPP_NUMERO: string = "5589999300439";

const pulseiras = [
  {
    id: 1,
    nome: "Pulseira Macramê",
    valor: "Valor e Cores Via Whatsapp",
    imagem: PulseiraMacrame,
    variacoes: [
      // { imagem: PulseiraMacrame2 },
      // { imagem: PulseiraMacrame3 },
    ],
  },
  {
    id: 2,
    nome: "Pulseira Dezena",
    valor: "Valor e Cores Via Whatsapp",
    imagem: PulseiraDezena,
    variacoes: [{ imagem: PulseiraDezena2 }, { imagem: PulseiraDezena3 }],
  },
  {
    id: 3,
    nome: "Terço Pulseira",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPulseira,
    variacoes: [
      // { imagem: TercoPulseira2 },
    ],
  },
];

function PulseirasList() {
  return (
    <>
      <Header />
      <div className={styles["card-list"]}>
        {pulseiras.map((pulseira) => (
          <PulseirasCard
            key={pulseira.id}
            nome={pulseira.nome}
            valor={pulseira.valor}
            imagem={pulseira.imagem}
            variacoes={pulseira.variacoes}
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

export default PulseirasList;
