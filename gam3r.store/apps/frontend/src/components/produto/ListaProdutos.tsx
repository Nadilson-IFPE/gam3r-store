"use client";
import { produtos } from "@gstore/core";
// import useProdutos from '@/data/hooks/useProdutos'
import ProdutoItem from "./ProdutoItem";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";

export default function ListaProdutos() {
  // const { produtos } = useProdutos()
  return produtos.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white">
      {produtos.map((produto) => (
        <ProdutoItem produto={produto} key={produto.id} />
      ))}
    </div>
  ) : (
    <ProdutoNaoEncontrado semBotaoVoltar />
  );
}
