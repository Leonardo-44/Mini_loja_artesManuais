import { Link } from "react-router-dom";
import TercoCard from "./TercosCard";
import Header from "../../Header/Header";

import styles from "../Cards.module.css";

import TercoInfantilEmborrachadoMasculino from "../../../images/Tercos/TercoInfantilEmborrachadoMasculino.png";
import TercoInfantilEmborrachadoFeminino from "../../../images/Tercos/TercoInfantilEmborrachadoFeminino.png";
import TercoPersonalizadoSaoJose from "../../../images/Tercos/TercoPersonalizadoSaoJose.png";
import TercoPersonalizadoAparecida from "../../../images/Tercos/TercoPersonalizadoAparecida.png";
import TercoPersonalizadoInfantil from "../../../images/Tercos/TercoPersonalizadoInfantil.png";
import TercoProfissao from "../../../images/Tercos/TercoProfissao.png";
import TercoSantaTeresinha from "../../../images/Tercos/TercoSantaTeresinha.png";
import TercoSaoFranciscoPersonalizado from "../../../images/Tercos/TercoSaoFrancPersonalizado.png";

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
  },
  {
    id: 4,
    nome: "Terço Profissão",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoProfissao,
  },
  {
    id: 5,
    nome: "Terço Santa Teresinha",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSantaTeresinha,
  },
  {
    id: 6,
    nome: "Terço São Francisco Personalizado",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoSaoFranciscoPersonalizado,
  },
  {
    id: 7,
    nome: "Terço Personalizado Aparecida",
    valor: "Valor e Cores Via Whatsapp",
    imagem: TercoPersonalizadoAparecida,
  },
];

function TercoList() {
  return (
    <>
      <Header />
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
