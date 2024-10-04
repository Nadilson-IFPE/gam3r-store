import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from "../constants";
import Parcelamento from "./Parcelamento";

export default class CalcularParcelamento {
  executar(
    valor: number,
    qtdeParcelas: number = QTDE_MAX_PARCELAS,
    taxaJuros: number = TAXA_JUROS_MENSAL
  ): Parcelamento {
    if (qtdeParcelas < 2 || qtdeParcelas > QTDE_MAX_PARCELAS) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${QTDE_MAX_PARCELAS}`
      );
    }

    const totalComJuros = this.calcularJurosCompostos(
      valor,
      taxaJuros,
      qtdeParcelas
    );

    return {
      valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdeParcelas),
      valorTotal: this.comDuasCasasDecimais(totalComJuros),
      qtdeParcelas,
      taxaJuros,
    };
  }

  private calcularJurosCompostos(
    valorTotal: number,
    taxaMensal: number,
    qtdeParcelas: number
  ) {
    return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas);
  }

  private comDuasCasasDecimais(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}
