import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export interface CartItem {
  id: string; // nome + índice da variação para ser único
  nome: string;
  imagem: string;
  quantidade: number;
}

interface CartContextType {
  itens: CartItem[];
  adicionarItem: (item: Omit<CartItem, "quantidade">) => void;
  removerItem: (id: string) => void;
  alterarQuantidade: (id: string, delta: number) => void;
  limparCarrinho: () => void;
  totalItens: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CartItem[]>([]);

  const adicionarItem = (novoItem: Omit<CartItem, "quantidade">) => {
    setItens((prev) => {
      const existente = prev.find((i) => i.id === novoItem.id);
      if (existente) {
        return prev.map((i) =>
          i.id === novoItem.id ? { ...i, quantidade: i.quantidade + 1 } : i,
        );
      }
      return [...prev, { ...novoItem, quantidade: 1 }];
    });
  };

  const removerItem = (id: string) =>
    setItens((prev) => prev.filter((i) => i.id !== id));

  const alterarQuantidade = (id: string, delta: number) =>
    setItens((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + delta } : i,
        )
        .filter((i) => i.quantidade > 0),
    );

  const limparCarrinho = () => setItens([]);

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);

  return (
    <CartContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        alterarQuantidade,
        limparCarrinho,
        totalItens,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
