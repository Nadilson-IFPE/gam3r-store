import CalcularParcelamento from '@gstore/core/src/parcelamento';

export default function useParcelamento(
  valor: number,
  quantidade: number = 12
) {
  return new CalcularParcelamento().executar(valor, quantidade);
}
