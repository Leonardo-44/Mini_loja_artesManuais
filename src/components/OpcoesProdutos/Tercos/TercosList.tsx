import { useState } from "react";
import { Link } from "react-router-dom";
import TercoCard from "./TercosCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import TercoInfantilEmborrachadoMasculino from "../../../images/Tercos/TercoInfantilEmborrachadoMasculino.png";
import TercoInfantilEmborrachadoMasculino2 from "../../../images/Tercos/TercoInfantilEmborrachadoMasculino2.png";

import TercoInfantilEmborrachadoFeminino from "../../../images/Tercos/TercoInfantilEmborrachadoFeminino.png";

import TercoPersonalizadoSaoJose from "../../../images/Tercos/TercoPersonalizadoSaoJose.png";
import TercoPersonalizadoSaoJose2 from "../../../images/Tercos/TercoPersonalizadoSaoJose2.png";

import TercoPersonalizadoAparecida from "../../../images/Tercos/TercoPersonalizadoAparecida.png";
import TercoPersonalizadoAparecida2 from "../../../images/Tercos/TercoPersonalizadoAparecida2.png";
import TercoPersonalizadoAparecida3 from "../../../images/Tercos/TercoPersonalizadoAparecida3.png";

import TercoAparecida from "../../../images/Tercos/TercoAparecida.png";

import TercoPersonalizadoInfantil from "../../../images/Tercos/TercoPersonalizadoInfantil.png";
import TercoPersonalizadoInfantil2 from "../../../images/Tercos/TercoPersonalizadoInfantil2.png";

import TercoProfissao from "../../../images/Tercos/TercoProfissao.png";

import TercoPersonalizadoProfissao from "../../../images/Tercos/TercoPersonalizadoProfissao.png";

import TercoSantaTeresinha from "../../../images/Tercos/TercoSantaTeresinha.png";
import TercoSaoFranciscoPersonalizado from "../../../images/Tercos/TercoSaoFrancPersonalizado.png";

import TercoSaoJose from "../../../images/Tercos/TercoSaoJose.png";
import TercoSaoJose2 from "../../../images/Tercos/TercoSaoJose2.png";

import TercoSaoCarloAcutis from "../../../images/Tercos/TercoSaoCarloAcustis.png";

import TercoPersonalizadoSagradaFamilia from "../../../images/Tercos/TercoPersonalizadoSagradaFamilia.png";

import KitTercoChaveiroSaoJose from "../../../images/Tercos/KitTercoChaveiroSaoJose.png";
import KitTercoChaveiroSaoJose2 from "../../../images/Tercos/KitTercoChaveiroSaoJose2.png";

const WHATSAPP_NUMERO: string = "5589999300439";
const ITENS_POR_PAGINA = 12;

const tercos = [
  {
    id: 1,
    nome: "Terço Infantil Emborrachado",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoInfantilEmborrachadoMasculino,
    variacoes: [
      {
        imagem: TercoInfantilEmborrachadoFeminino,
        nome: "Terço Infantil Fem. Emborrachado",
      },
      {
        imagem: TercoInfantilEmborrachadoMasculino2,
        nome: "Terço Infantil Masc. Emborrachado",
      },
    ],
  },
  {
    id: 2,
    nome: "Terço Personalizado São José",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoSaoJose,
    variacoes: [{ imagem: TercoPersonalizadoSaoJose2 }],
  },
  {
    id: 3,
    nome: "Terço Personalizado Infantil",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoInfantil,
    variacoes: [{ imagem: TercoPersonalizadoInfantil2 }],
  },
  {
    id: 4,
    nome: "Terço Profissão",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoProfissao,
  },
  {
    id: 5,
    nome: "Terço Personalizado Profissão",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoProfissao,
  },
  {
    id: 6,
    nome: "Terço Santa Teresinha",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSantaTeresinha,
  },
  {
    id: 7,
    nome: "Terço Personalizado São Francisco",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSaoFranciscoPersonalizado,
  },
  {
    id: 8,
    nome: "Terço Personalizado Aparecida",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoAparecida,
    variacoes: [
      { imagem: TercoPersonalizadoAparecida2 },
      { imagem: TercoPersonalizadoAparecida3 },
    ],
  },
  {
    id: 9,
    nome: "Terço Aparecida",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoAparecida,
  },
  {
    id: 10,
    nome: "Terço São José",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSaoJose,
    variacoes: [{ imagem: TercoSaoJose2 }],
  },
  {
    id: 11,
    nome: "Terço São Carlo Acutis",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSaoCarloAcutis,
  },
  {
    id: 12,
    nome: "Terço Personalizado Sagrada Familia",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoSagradaFamilia,
  },
  {
    id: 13,
    nome: "Kit Terço e Chaveiro São José",
    valor: "Valor e Cores Via Whatsapp",
    imagem: KitTercoChaveiroSaoJose,
    variacoes: [{ imagem: KitTercoChaveiroSaoJose2 }],
  },
];

function TercoList() {
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(tercos.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const tercosPagina = tercos.slice(inicio, inicio + ITENS_POR_PAGINA);

  const handlePagina = (num: number) => {
    setPagina(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Terços</h1>
      </div>

      <div className={styles["card-list"]}>
        {tercosPagina.map((terco) => (
          <TercoCard
            key={`${terco.id}-p${pagina}`}
            nome={terco.nome}
            valor={terco.valor}
            imagem={terco.imagem}
            variacoes={terco.variacoes}
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

export default TercoList;
