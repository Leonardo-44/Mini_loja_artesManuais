import React from "react";

interface TercoCardProps {
  nome: string;
  preco: number;
  imagem: string;
  whatsappNumero: string; // ex: "5511999999999"
  mensagem?: string;
}

function TercoCard({ nome, preco, imagem, whatsappNumero, mensagem }: TercoCardProps) {
  const mensagemFormatada = mensagem
    ? encodeURIComponent(mensagem)
    : encodeURIComponent(`Olá! Tenho interesse no terço: ${nome} - R$ ${preco.toFixed(2)}`);

  const whatsappLink = `https://wa.me/${whatsappNumero}?text=${mensagemFormatada}`;

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img src={imagem} alt={nome} style={styles.image} />
      </div>
      <div style={styles.info}>
        <h3 style={styles.nome}>{nome}</h3>
        <span style={styles.preco}>R$ {preco.toFixed(2)}</span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={styles.botao}>
          <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.507A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.732.888.924-3.644-.234-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Comprar via WhatsApp
        </a>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    background: "#fefbf8",           // --bg-header
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(42,31,25,0.10)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    width: "260px",
    transition: "transform 0.2s, box-shadow 0.2s",
    border: "1px solid #ebe6e0",     // --bg-hero-about
  },
  imageWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    backgroundColor: "#ebe6e0",      // --bg-hero-about
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  info: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#f9f5ee",     // --bg-products
  },
  nome: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#2a1f19",               // --color-primary-font
    fontFamily: "'Georgia', serif",
  },
  preco: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#98521a",               // --color-quartenary-font
  },
  botao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    backgroundColor: "#31623d",     // --bg-secondary-btn
    color: "#ffffff",               // --color-tertiary-font
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "0.9rem",
    transition: "background 0.2s",
  },
  icon: {
    width: "18px",
    height: "18px",
  },
};

export default TercoCard;