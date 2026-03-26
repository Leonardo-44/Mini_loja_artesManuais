import { useState } from "react";
import styles from "../Cards.module.css";
import { useCart } from "../Cart/CartContext";

interface Variacao {
  imagem: string;
  nome?: string;
  preco?: string;
  mensagem?: string;
}

interface ChaveiroCardProps {
  nome: string;
  valor: string;
  imagem: string;
  variacoes?: Variacao[];
  whatsappNumero: string;
  mensagem?: string;
}

function ChaveirosCard({
  nome,
  valor,
  imagem,
  variacoes = [],
  mensagem,
}: ChaveiroCardProps) {
  const [indice, setIndice] = useState(0);
  const { adicionarItem, removerItem, itens } = useCart();

  const todas: Variacao[] = [
    { imagem, nome, preco: valor, mensagem },
    ...variacoes,
  ];

  const atual = todas[indice];
  const nomeAtual = atual.nome ?? nome;
  const precoAtual = atual.preco ?? valor;

  // ✅ Definições que estavam faltando
  const itemId = `${nome}-${indice}`;
  const noCarrinho = itens.some((item) => item.id === itemId);

  const irAnterior = () =>
    setIndice((i) => (i - 1 + todas.length) % todas.length);
  const irProxima = () => setIndice((i) => (i + 1) % todas.length);

  const handleToggleCarrinho = () => {
    if (noCarrinho) {
      removerItem(itemId);
    } else {
      adicionarItem({
        id: itemId,
        nome: nomeAtual,
        imagem: atual.imagem,
      });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} style={{ position: "relative" }}>
        {noCarrinho && <div className={styles.seloSelecionado}>✓</div>}
        <img src={atual.imagem} alt={nomeAtual} className={styles.image} />

        {todas.length > 1 && (
          <>
            <button
              onClick={irAnterior}
              aria-label="Variação anterior"
              style={{
                position: "absolute",
                left: 6,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.45)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                color: "#fff",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>

            <button
              onClick={irProxima}
              aria-label="Próxima variação"
              style={{
                position: "absolute",
                right: 6,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.45)",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                color: "#fff",
                fontSize: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>

            <div
              style={{
                position: "absolute",
                bottom: 6,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 5,
              }}
            >
              {todas.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndice(i)}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background:
                      i === indice ? "#fff" : "rgba(255,255,255,0.45)",
                    cursor: "pointer",
                    display: "inline-block",
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
        <button
          className={`${styles.botaoCarrinho} ${noCarrinho ? styles.botaoAdicionado : ""}`}
          onClick={handleToggleCarrinho}
        >
          {noCarrinho ? (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={16}
                height={16}
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Adicionado — Remover
            </>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={16}
                height={16}
              >
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10.3-4h11.6c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0022.46 6H5.21L4.27 4H1v2h2l3.6 7.59L5.25 16c-.16.28-.25.61-.25.96C5 18.1 5.9 19 7 19h14v-2H7.42a.25.25 0 01-.22-.38L6.7 14z" />
              </svg>
              Adicionar ao Carrinho
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ChaveirosCard;
