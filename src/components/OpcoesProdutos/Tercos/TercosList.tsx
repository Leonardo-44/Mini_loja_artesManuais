import { Link } from "react-router-dom";
import TercoCard from "./TercosCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import TercoInfantilEmborrachadoMasculino from "../../../images/Tercos/TercoInfantilEmborrachadoMasculino.png";
import TercoInfantilEmborrachadoMasculino2 from "../../../images/Tercos/TercoInfantilEmborrachadoMasculino2.png"

import TercoInfantilEmborrachadoFeminino from "../../../images/Tercos/TercoInfantilEmborrachadoFeminino.png";
import TercoPersonalizadoSaoJose from "../../../images/Tercos/TercoPersonalizadoSaoJose.png";

import TercoPersonalizadoAparecida from "../../../images/Tercos/TercoPersonalizadoAparecida.png";
import TercoPersonalizadoAparecida2 from "../../../images/Tercos/TercoPersonalizadoAparecida2.png";

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

const WHATSAPP_NUMERO: string = "5589999300439";

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
    // variacoes: [
    //   { imagem: TercoPersonalizadoAparecida, nome: "Terço Personalizado Aparecida" },
    // ],
  },
  {
    id: 3,
    nome: "Terço Personalizado Infantil",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoInfantil,
    variacoes: [
      {imagem: TercoPersonalizadoInfantil2},
    ],
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
    nome: "Terço São Francisco Personalizado",
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
];

function TercoList() {
  return (
    <>
      <Header />
      <div className="d-flex alg-center jc-center padding92">
        <h1 className={styles.title}>Terços</h1>
      </div>
      <div className={styles["card-list"]}>
        {tercos.map((terco) => (
          <TercoCard
            key={terco.id}
            nome={terco.nome}
            valor={terco.valor}
            imagem={terco.imagem}
            variacoes={terco.variacoes}
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

export default TercoList;
