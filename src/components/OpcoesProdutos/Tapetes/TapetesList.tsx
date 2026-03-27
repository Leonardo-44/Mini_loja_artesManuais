import { useState } from "react";
import { Link } from "react-router-dom";
import TapetesCard from "./TapetesCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import KitPassadeira from "../../../images/Tapetes/KitPassadeira.png";
import KitPassadeiraDois from "../../../images/Tapetes/KItPassadeira2.png";
import KitPassadeira3 from "../../../images/Tapetes/KitPAssadeira3.png";
import KitPassadeira4 from "../../../images/Tapetes/KitPassadeira4.png";

import TapeteOval from "../../../images/Tapetes/TapeteOval.png";
import TapeteOvalDois from "../../../images/Tapetes/TapeteOval2.png";
import TapeteOval3 from "../../../images/Tapetes/TapeteOval3.png";
import TapeteOval4 from "../../../images/Tapetes/TapeteOval4.png";

import TrilhoDeMesaRealeza from "../../../images/Tapetes/TrilhodeMesaRealeza.png";

import TapetePassadeira from "../../../images/Tapetes/TapetePassadeira.png";

const WHATSAPP_NUMERO: string = "5589999300439";
const ITENS_POR_PAGINA = 12;

const tapetes = [
  {
    id: 1,
    nome: "Kit Passadeira",
    valor: "Valor e Cores Via Whatsapp",
    imagem: KitPassadeira,
    variacoes: [
      { imagem: KitPassadeiraDois },
      { imagem: KitPassadeira3 },
      { imagem: KitPassadeira4 },
    ],
  },
  {
    id: 2,
    nome: "Tapete Oval",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TapeteOval,
    variacoes: [
      { imagem: TapeteOvalDois },
      { imagem: TapeteOval3 },
      { imagem: TapeteOval4 },
    ],
  },
  {
    id: 3,
    nome: "Trilho de Mesa Realeza",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TrilhoDeMesaRealeza,
  },
  {
    id: 4,
    nome: "Tapete Passadeira",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TapetePassadeira,
  },
];

function TapetesList() {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(tapetes.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const tapetesPagina = tapetes.slice(inicio, inicio + ITENS_POR_PAGINA);

  const handlePagina = (num: number) => {
    setPagina(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Tapetes</h1>
      </div>
      <div className={styles["card-list"]}>
        {tapetesPagina.map((tapete) => (
          <TapetesCard
            key={`${tapete.id}-p${pagina}`}
            nome={tapete.nome}
            valor={tapete.valor}
            imagem={tapete.imagem}
            variacoes={tapete.variacoes}
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

export default TapetesList;