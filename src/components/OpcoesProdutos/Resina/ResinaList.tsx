import { useState } from "react";
import { Link } from "react-router-dom";
import ResinaCard from "./ResinaCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import ChaveiroResinaComFoto from "../../../images/Resinas/ChaveiroResinaComFoto.jpeg";

import ChaveiroLetra from "../../../images/Resinas/ChaveiroLetra.png";
import ChaveiroLetra2 from "../../../images/Resinas/ChaveiroLetra2.png";
import ChaveiroLetra3 from "../../../images/Resinas/ChaveiroLetra3.png";

import KitChaveiroLetraCaneta from "../../../images/Resinas/KitChaveiroLetraCaneta.png";

import ChaveiroCalendario from "../../../images/Resinas/ChaveiroCalendario.png";

const WHATSAPP_NUMERO: string = "5589999300439";
const ITENS_POR_PAGINA = 12;

const resinas = [
  {
    id: 1,
    nome: "Chaveiro Resina com Foto",
    valor: "Valor e Modelos Via Whatsapp",
    imagem: ChaveiroResinaComFoto,
    variacoes: [],
  },
  {
    id: 2,
    nome: "Chaveiro com Letra",
    valor: "Valor e Modelos Via Whatsapp",
    imagem: ChaveiroLetra,
    variacoes: [{ imagem: ChaveiroLetra2 }, { imagem: ChaveiroLetra3 }],
  },
  {
    id: 3,
    nome: "Kit Chaveiro e Caneta",
    valor: "Valor e Modelos Via Whatsapp",
    imagem: KitChaveiroLetraCaneta,
    variacoes: [],
  },
  {
    id: 4,
    nome: "Chaveiro Calendário",
    valor: "Valor e Modelos Via Whatsapp",
    imagem: ChaveiroCalendario,
    variacoes: [],
  },
];

function ResinaList() {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(resinas.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const resinasPagina = resinas.slice(inicio, inicio + ITENS_POR_PAGINA);

  const handlePagina = (num: number) => {
    setPagina(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Itens em Resina</h1>
      </div>
      <div className={`${styles["card-list"]}`}>
        {resinasPagina.map((resina) => (
          <ResinaCard
            key={`${resina.id}-p${pagina}`}
            nome={resina.nome}
            valor={resina.valor}
            imagem={resina.imagem}
            variacoes={resina.variacoes}
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

export default ResinaList;
