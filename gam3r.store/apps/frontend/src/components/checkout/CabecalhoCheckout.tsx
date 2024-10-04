import Link from "next/link";

interface CabecalhoCheckoutProps {
  passo: "carrinho" | "pagamento";
}

export default function CabecalhoCheckout(props: CabecalhoCheckoutProps) {
  function corSelecionada(passo: string) {
    return props.passo === passo ? "text-pink-500" : "text-zinc-400";
  }

  function bkSelecionado(passo: string) {
    return props.passo === passo
      ? "bg-pink-500 text-white"
      : "bg-zinc-400 text-black";
  }

  function renderizarItem(
    passo: "carrinho" | "pagamento",
    indice: number,
    titulo: string,
    caminho: string
  ) {
    return (
      <Link
        href={caminho}
        className={`
                    flex items-center gap-2 cursor-pointer
                    ${corSelecionada(passo)}
                `}
      >
        <span
          className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${bkSelecionado(passo)}
                    `}
        >
          {indice}
        </span>
        <span>{titulo}</span>
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center gap-6 h-20 select-none">
      {renderizarItem("carrinho", 1, "Carrinho", "/checkout/carrinho")}
      <div className="bg-zinc-300 h-px w-12"></div>
      {renderizarItem("pagamento", 2, "Pagamento", "/checkout/pagamento")}
    </div>
  );
}
