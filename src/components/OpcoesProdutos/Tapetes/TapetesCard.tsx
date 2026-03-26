import { useState } from "react";
import styles from "../Cards.module.css";

interface Variacao {
  imagem: string;
  nome?: string;
  preco?: string;
  mensagem?: string;
}

interface TapeteCardProps {
  nome: string;
  valor: string;
  imagem: string;
  variacoes?: Variacao[];
  whatsappNumero: string;
  mensagem?: string;
}

function TapetesCard({
  nome,
  valor,
  imagem,
  variacoes = [],
  whatsappNumero,
  mensagem,
}: TapeteCardProps) {
  const [indice, setIndice] = useState(0);

  const todas: Variacao[] = [
    { imagem, nome, preco: valor, mensagem },
    ...variacoes,
  ];

  const atual = todas[indice];
  const nomeAtual  = atual.nome  ?? nome;
  const precoAtual = atual.preco ?? valor;

  const mensagemFormatada = encodeURIComponent(
    atual.mensagem ?? mensagem ?? `Olá! Tenho interesse no item: ${nomeAtual}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumero}?text=${mensagemFormatada}`;

  const irAnterior = () => setIndice((i) => (i - 1 + todas.length) % todas.length);
  const irProxima  = () => setIndice((i) => (i + 1) % todas.length);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} style={{ position: "relative" }}>
        <img src={atual.imagem} alt={nomeAtual} className={styles.image} />

        {todas.length > 1 && (
          <>
            <button
              onClick={irAnterior}
              aria-label="Variação anterior"
              style={{
                position: "absolute", left: 6, top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.45)", border: "none",
                borderRadius: "50%", width: 32, height: 32,
                cursor: "pointer", color: "#fff", fontSize: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ‹
            </button>

            <button
              onClick={irProxima}
              aria-label="Próxima variação"
              style={{
                position: "absolute", right: 6, top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.45)", border: "none",
                borderRadius: "50%", width: 32, height: 32,
                cursor: "pointer", color: "#fff", fontSize: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ›
            </button>

            <div style={{
              position: "absolute", bottom: 6, left: "50%",
              transform: "translateX(-50%)",
              display: "flex", gap: 5,
            }}>
              {todas.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndice(i)}
                  style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: i === indice ? "#fff" : "rgba(255,255,255,0.45)",
                    cursor: "pointer", display: "inline-block",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.nome}>{nomeAtual}</h3>
        <span className={styles.preco}>{precoAtual}</span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.botao}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.507A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.732.888.924-3.644-.234-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Comprar via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default TapetesCard;