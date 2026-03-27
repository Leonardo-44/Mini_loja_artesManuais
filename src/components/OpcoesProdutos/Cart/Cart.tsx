import { useState } from "react";
import { useCart } from "./CartContext";
import styles from "./Cart.module.css";

const WHATSAPP_NUMERO = "5589999300439";

export default function Cart() {
  const { itens, removerItem, alterarQuantidade, limparCarrinho, totalItens } =
    useCart();
  const [aberto, setAberto] = useState(false);

  const handleComprar = () => {
    if (itens.length === 0) return;

    const linhas = itens.map(
      (i) => `• ${i.nome}${i.quantidade > 1 ? ` (x${i.quantidade})` : ""}`,
    );
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de comprar os seguintes produtos:\n\n${linhas.join("\n")}\n\nPoderia me passar os valores e cores disponíveis?`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        className={styles.fab}
        onClick={() => setAberto(true)}
        aria-label="Abrir carrinho"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24}>
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10.3-4h11.6c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0022.46 6H5.21L4.27 4H1v2h2l3.6 7.59L5.25 16c-.16.28-.25.61-.25.96C5 18.1 5.9 19 7 19h14v-2H7.42a.25.25 0 01-.22-.38L6.7 14z" />
        </svg>
        {totalItens > 0 && <span className={styles.badge}>{totalItens}</span>}
      </button>

      {/* Painel do carrinho - Controlado por classe para permitir transição */}
      <div className={`${styles.painel} ${aberto ? styles.painelAberto : ""}`}>
        <div className={styles.cabecalho}>
          <h2 className={styles.titulo}>🛒 Meu Carrinho</h2>
          <button className={styles.fechar} onClick={() => setAberto(false)}>
            ✕
          </button>
        </div>

        {itens.length === 0 ? (
          <p className={styles.vazio}>Nenhum item adicionado ainda.</p>
        ) : (
          <>
            <ul className={styles.lista}>
              {itens.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className={styles.thumb}
                  />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemNome}>{item.nome}</span>
                    <div className={styles.controles}>
                      <button onClick={() => alterarQuantidade(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => alterarQuantidade(item.id, +1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.remover}
                    onClick={() => removerItem(item.id)}
                    aria-label="Remover item"
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>

            <div className={styles.rodape}>
              <button className={styles.btnLimpar} onClick={limparCarrinho}>
                Limpar carrinho
              </button>
              <button className={styles.btnComprar} onClick={handleComprar}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={18}
                  height={18}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L0 24l6.335-1.507A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.732.888.924-3.644-.234-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                Comprar via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>

      {/* Overlay - Controlado por classe */}
      <div
        className={`${styles.overlay} ${aberto ? styles.overlayAberto : ""}`}
        onClick={() => setAberto(false)}
      />
    </>
  );
}
