"use client";
import CabecalhoCheckout from "@/components/checkout/CabecalhoCheckout";
import CarrinhoItem from "@/components/checkout/carrinho/CarrinhoItem";
import CarrinhoVazio from "@/components/checkout/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/components/checkout/carrinho/TotalCarrinho";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Pagina() {
  const {
    itens,
    qtdeItens,
    valorTotal,
    adicionarItem,
    removerItem,
    removerProduto,
  } = useCarrinho();

  return (
    <div className="flex flex-col gap-5 container">
      <CabecalhoCheckout passo="carrinho" />
      <div className="flex flex-col gap-4">
        {itens.length === 0 && <CarrinhoVazio />}
        {itens.map((item: any) => (
          <CarrinhoItem
            key={item.produto.id}
            item={item}
            adicionarItem={() => adicionarItem(item.produto)}
            removerItem={() => removerItem(item.produto)}
            removerProduto={() => removerProduto(item.produto)}
          />
        ))}
      </div>
      <TotalCarrinho qtdeItens={qtdeItens} valorTotal={valorTotal} />
    </div>
  );
}
