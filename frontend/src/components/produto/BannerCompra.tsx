"use client";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { Moeda, Produto } from "@/core";
// import useCarrinho from '@/data/hooks/useCarrinho'
import useParcelamento from "@/data/hooks/useParcelamento";
import { useRouter } from "next/navigation";

export interface BannerCompraProps {
  produto: Produto;
}

export default function BannerCompra(props: BannerCompraProps) {
  const router = useRouter();
  const { produto } = props;
  // const { adicionarItem } = useCarrinho()
  const parcelamento = useParcelamento(produto.precoPromocional);

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          de R$ {produto?.precoBase}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">
            R$ {produto?.precoPromocional}
          </span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {parcelamento.qtdeParcelas}x de
        </span>
        {Moeda.formatar(parcelamento.valorParcela)}{" "}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="flex-1 button bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(produto)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="flex-1 button bg-violet-700"
          onClick={() => {
            // adicionarItem(produto)
            router.push("/checkout/pagamento");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
