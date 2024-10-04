"use client";
import {
  Carrinho,
  ItemCarrinho,
  Produto,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import CalcularParcelamento from "@gstore/core/src/parcelamento";
import Parcelamento from "@gstore/core/src/parcelamento/Parcelamento";

export interface ContextoCarrinhoProps {
  itens: ItemCarrinho[];
  qtdeItens: number;
  valorTotalCheio: number;
  valorTotal: number;
  parcelamento: Parcelamento;
  adicionarItem: (produto: Produto) => void;
  removerItem: (produto: Produto) => void;
  removerProduto: (produto: Produto) => void;
  limparCarrinho: () => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any);

export function ProvedorCarrinho(props: any) {
  const { salvarItem, obterItem } = useLocalStorage();
  const [carrinho, setCarrinho] = useState<Carrinho>(new Carrinho());

  function adicionarItem(produto: Produto) {
    alterarCarrinho(carrinho.adicionarItem(produto));
  }

  function removerItem(produto: Produto) {
    alterarCarrinho(carrinho.removerItem(produto));
  }

  function removerProduto(produto: Produto) {
    alterarCarrinho(carrinho.removerProduto(produto));
  }

  function limparCarrinho() {
    alterarCarrinho(carrinho.limpar());
  }

  function alterarCarrinho(carrinho: Carrinho) {
    salvarItem("carrinho", carrinho.itens);
    setCarrinho(carrinho);
  }

  useEffect(() => {
    const itensSalvos: ItemCarrinho[] = obterItem("carrinho");
    if (itensSalvos) setCarrinho(new Carrinho(itensSalvos));
  }, [obterItem]);

  return (
    <ContextoCarrinho.Provider
      value={{
        itens: carrinho.itens,
        qtdeItens: carrinho.qtdeItens,
        valorTotal: carrinho.valorTotal,
        valorTotalCheio: carrinho.valorTotalCheio,
        parcelamento: new CalcularParcelamento().executar(carrinho.valorTotal),
        adicionarItem,
        removerItem,
        removerProduto,
        limparCarrinho,
      }}
    >
      {props.children}
    </ContextoCarrinho.Provider>
  );
}

export default ContextoCarrinho;
