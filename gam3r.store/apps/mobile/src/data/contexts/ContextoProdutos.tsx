import { createContext, useCallback, useEffect, useState } from "react";
import { Produto } from "@gstore/core";
import useAPI from "../hooks/useAPI";
import FiltrarProdutos from '@gstore/core/src/produto/FiltrarProdutos';

export interface ContextoProdutosProps {
  produtos: Produto[];
  pesquisa: string;
  setPesquisa: (pesquisa: string) => void;
  produtoPorId: (id: number) => Produto | null;
}

const ContextoProdutos = createContext<ContextoProdutosProps>({} as any);

export function ProvedorProdutos(props: any) {
  const { httpGet } = useAPI();
  const [pesquisa, setPesquisa] = useState<string>("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const carregarProdutos = useCallback(async () => {
    const produtos = await httpGet("/produtos");
    setProdutos(Array.isArray(produtos) ? produtos : []);
  }, [httpGet]);

  useEffect(() => {
    carregarProdutos();
  }, [carregarProdutos]);

  return (
    <ContextoProdutos.Provider
      value={{
        pesquisa,
        get produtos() {
          if (!pesquisa) return produtos;
          return new FiltrarProdutos().executar(pesquisa, produtos);
        },
        setPesquisa,
        produtoPorId: (id: number) =>
          produtos.find((produto) => produto.id === id) ?? null,
      }}
    >
      {props.children}
    </ContextoProdutos.Provider>
  );
}

export default ContextoProdutos;
