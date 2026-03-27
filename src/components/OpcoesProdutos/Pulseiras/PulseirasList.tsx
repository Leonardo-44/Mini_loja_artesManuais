import { useState } from "react";
import { Link } from "react-router-dom";
import PulseirasCard from "./PulseirasCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import PulseiraMacrame from "../../../images/Pulseiras/PulseiraMacrame.png";

import PulseiraDezena from "../../../images/Pulseiras/PulseiraDezena.png";
import PulseiraDezena2 from "../../../images/Pulseiras/PulseiraDezena2.png";
import PulseiraDezena3 from "../../../images/Pulseiras/PulseiraDezena3.png";

import TercoPulseira from "../../../images/Pulseiras/TercoPulseira.png";

const WHATSAPP_NUMERO: string = "5589999300439";
const ITENS_POR_PAGINA = 12;

const pulseiras = [
  {
    id: 1,
    nome: "Pulseira Macramê",
    valor: "Valor e Cores Via Whatsapp",
    imagem: PulseiraMacrame,
    variacoes: [],
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
    variacoes: [],
  },
];

function PulseirasList() {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(pulseiras.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const pulseirasPagina = pulseiras.slice(inicio, inicio + ITENS_POR_PAGINA);

  const handlePagina = (num: number) => {
    setPagina(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Pulseiras</h1>
      </div>
      <div className={styles["card-list"]}>
        {pulseirasPagina.map((pulseira) => (
          <PulseirasCard
            key={`${pulseira.id}-p${pagina}`}
            nome={pulseira.nome}
            valor={pulseira.valor}
            imagem={pulseira.imagem}
            variacoes={pulseira.variacoes}
            whatsappNumero={WHATSAPP_NUMERO}
          />
        ))}
      </div>

      {totalPaginas > 1 && (
        <div className={styles.paginacao}>
          <button
            className={styles.paginacaoBotao}
            onClick={() => handlePagina(pagina - 1)}
            disabled={pagina === 1}
          >
            ‹ Anterior
          </button>

          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`${styles.paginacaoBotao} ${pagina === num ? styles.paginacaoAtiva : ""}`}
              onClick={() => handlePagina(num)}
            >
              {num}
            </button>
          ))}

          <button
            className={styles.paginacaoBotao}
            onClick={() => handlePagina(pagina + 1)}
            disabled={pagina === totalPaginas}
          >
            Próxima ›
          </button>
        </div>
      )}

      <div className="d-flex alg-center jc-center margin16">
        <Link to="/">
          <button className={styles.voltar}>Voltar</button>
        </Link>
      </div>
    </>
  );
}

export default PulseirasList;
