import TercoCard from "./TercosCard";
import Img from "../../assets/react.svg"

const WHATSAPP_NUMERO = "5511999999999"; // ← troque pelo seu número

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
];

function TercoList() {
  return (
    <div className="container d-flex margin32 jc-between">
        
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
  );
}

export default TercoList;