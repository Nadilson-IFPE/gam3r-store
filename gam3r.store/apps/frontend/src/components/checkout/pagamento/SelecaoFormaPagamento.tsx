import { FormaPagamento } from "@gstore/core";

export interface SelecaoFormaPagamentoProps {
  formaPagamento?: FormaPagamento;
  formaPagamentoMudou?: (value: FormaPagamento) => void;
  className?: string;
}

export default function SelecaoFormaPagamento(
  props: SelecaoFormaPagamentoProps
) {
  function renderizarItem(label: string, tipo: FormaPagamento) {
    const selecionado = props.formaPagamento === tipo;
    return (
      <button
        className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
        onClick={() => props.formaPagamentoMudou?.(tipo)}
      >
        <span
          className={`
                        ${selecionado ? "bg-emerald-500 border-emerald-500" : "bg-transparent border-white"}
                        w-5 h-5 border-2 rounded-full
                    `}
        ></span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${props.className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Forma de Pagamento
      </span>
      <div className="flex flex-col gap-3 text-white/70">
        {renderizarItem("Pagamento no PIX", FormaPagamento.PIX)}
        {renderizarItem("Boleto Bancário", FormaPagamento.BOLETO)}
        {renderizarItem("Cartão de Crédito", FormaPagamento.CARTAO)}
      </div>
    </div>
  );
}
