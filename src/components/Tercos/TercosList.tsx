import { Link } from "react-router-dom";
import TercoCard from "./TercosCard";
import Img from "../../assets/react.svg";
import Header from "../Header/Header";

import styles from "./Tercos.module.css";

const WHATSAPP_NUMERO: string = "5589999300439";

const tercos = [
  {
    id: 1,
    nome: "Terço de Nossa Senhora",
    preco: 29.9,
    imagem: Img,
  },
  {
    id: 2,
    nome: "Terço Sagrado Coração",
    preco: 34.9,
    imagem: "https://via.placeholder.com/260x220?text=Terço+2",
  },
  {
    id: 3,
    nome: "Terço de São Francisco",
    preco: 27.5,
    imagem: "https://via.placeholder.com/260x220?text=Terço+3",
  },
  {
    id: 4,
    nome: "Terço de São Francisco",
    preco: 27.5,
    imagem: "https://via.placeholder.com/260x220?text=Terço+3",
  },
  {
    id: 5,
    nome: "Terço de São Francisco",
    preco: 27.5,
    imagem: "https://via.placeholder.com/260x220?text=Terço+3",
  },
];

function TercoList() {
  return (
    <>
      <Header />{" "}
      {/* <div className="voltar container">
        <Link to="/">
          <h3>← Voltar Para a Tela Inicial</h3>
        </Link>
      </div> */}
      <div className={`${styles["terco-list"]}`}>
        {tercos.map((terco) => (
          <TercoCard
            key={terco.id}
            nome={terco.nome}
            preco={terco.preco}
            imagem={terco.imagem}
            whatsappNumero={WHATSAPP_NUMERO}
          />
        ))}
      </div>
    </>
  );
}

export default TercoList;
