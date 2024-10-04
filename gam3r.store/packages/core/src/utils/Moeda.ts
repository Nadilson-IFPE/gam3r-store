export default class Moeda {
  static formatar(
    valor: number,
    localizacao: string = "pt-BR",
    moeda: string = "BRL"
  ): string {
    return (valor ?? 0).toLocaleString(localizacao, {
      style: "currency",
      currency: moeda,
    });
  }
}
