import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { Moeda, ItemCarrinho as ItemCarrinhoModel } from "@gstore/core";
import Image from "next/image";
import useParcelamento from "@/data/hooks/useParcelamento";

export interface CarrinhoItemProps {
  item: ItemCarrinhoModel;
  adicionarItem: () => void;
  removerItem: () => void;
  removerProduto: () => void;
}

export default function CarrinhoItem(props: CarrinhoItemProps) {
  const { item } = props;
  const { produto, quantidade } = item;
  const parcelamento = useParcelamento(produto.precoPromocional);

  return (
    <div className="flex items-center bg-violet-dark px-8 py-0 rounded-xl gap-16 text-white/70">
      <Image src={produto.imagem} width={200} height={0} alt="Imagem Produto" />
      <div className="flex flex-col h-28 flex-1">
        <span className="text-xl">{produto.nome}</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm text-zinc-400">Quantidade</span>
        <div className="flex items-center border border-zinc-300 rounded-lg">
          <button
            disabled={quantidade === 1}
            className={`${quantidade === 1 && "text-zinc-500 cursor-not-allowed"} px-2 py-0.5`}
            onClick={props.removerItem}
          >
            <IconMinus size={15} />
          </button>
          <span className="border-x border-zinc-300 text-lg px-4 py-0.5">
            {quantidade}
          </span>
          <button
            className="px-2 py-0.5 text-emerald-500"
            onClick={props.adicionarItem}
          >
            <IconPlus size={15} />
          </button>
        </div>
        <button
          className="flex items-center gap-1 text-pink-600 select-none"
          onClick={props.removerProduto}
        >
          <IconTrash size={20} />
          <span className="text-sm">Remover</span>
        </button>
      </div>
      <div className="flex flex-col items-end">
        <span className="line-through text-zinc-400 text-sm">
          de {Moeda.formatar(produto.precoBase)}
        </span>
        <div className="flex gap-1.5 items-baseline">
          <span className="text-sm">por</span>
          <span className="text-emerald-500 text-xl font-semibold">
            {Moeda.formatar(produto.precoPromocional)}
          </span>
        </div>
        <span className="text-xs text-zinc-300">
          Preço à vista no PIX/Boleto
        </span>
        <span className="text-sm text-zinc-300 mt-4">
          Parcelamento no Cartão
        </span>
        <div className="text-sm text-zinc-300">
          em até{" "}
          <span className="text-white font-semibold">
            {parcelamento.qtdeParcelas}x
          </span>{" "}
          de{" "}
          <span className="text-white font-semibold">
            {Moeda.formatar(parcelamento.valorParcela)}
          </span>
        </div>
      </div>
    </div>
  );
}
