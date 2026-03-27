import { useState } from "react";
import { Link } from "react-router-dom";
import ChaveirosCard from "./ChaveirosCard";
import Header from "../../Header/Header";
import styles from "../Cards.module.css";

import ChaveiroSagradaFamilia from "../../../images/Chaveiros/ChaveiroSagradaFamilia.png";
import ChaveiroPersSagradaFamilia2 from "../../../images/Chaveiros/ChaveiroSagradaFamilia2.png";

import ChaveiroAparecida from "../../../images/Chaveiros/ChaveiroAparecida.png";

import ChaveirosPersAparecida from "../../../images/Chaveiros/ChaveiroPersAparecida.png";

import KitCanetaChaveiro from "../../../images/Chaveiros/KitChaveiroCaneta.png";

import KitChaveiroCanetaPulseira from "../../../images/Chaveiros/KitChaveiroCanetaPulseira.png";

const WHATSAPP_NUMERO: string = "5589999300439";
const ITENS_POR_PAGINA = 12;

const chaveiros = [
  {
    id: 1,
    nome: "Chaveiro Pers. Sagrada Familia",
    valor: "Valor e Cores Via Whatsapp",
    imagem: ChaveiroSagradaFamilia,
    variacoes: [{ imagem: ChaveiroPersSagradaFamilia2 }],
  },
  {
    id: 2,
    nome: "Chaveiro Pers. Aparecida",
    valor: "Valor e Cores Via Whatsapp",
    imagem: ChaveirosPersAparecida,
    variacoes: [],
  },
  {
    id: 3,
    nome: "Chaveiro Aparecida",
    valor: "Valor e Cores  Via Whatsapp",
    imagem: ChaveiroAparecida,
    variacoes: [],
  },
  {
    id: 4,
    nome: "Kit Chaveiro e Caneta",
    valor: "Valor e Cores  Via Whatsapp",
    imagem: KitCanetaChaveiro,
    variacoes: [],
  },
  {
    id: 5,
    nome: "Kit Chaveiro, Caneta e Pulseira",
    valor: "Valor e Cores  Via Whatsapp",
    imagem: KitChaveiroCanetaPulseira,
    variacoes: [],
  },
];

function ChaveirosList() {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(chaveiros.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const cheveirosPagina = chaveiros.slice(inicio, inicio + ITENS_POR_PAGINA);

  const handlePagina = (num: number) => {
    setPagina(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Chaveiros</h1>
      </div>
      <div className={`${styles["card-list"]}`}>
        {cheveirosPagina.map((chaveiro) => (
          <ChaveirosCard
            key={`${chaveiro.id}-p${pagina}`}
            nome={chaveiro.nome}
            valor={chaveiro.valor}
            imagem={chaveiro.imagem}
            variacoes={chaveiro.variacoes}
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

export default ChaveirosList;