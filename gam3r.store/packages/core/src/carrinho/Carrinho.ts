import { Produto } from "../produto";
import ItemCarrinho from "./ItemCarrinho";

export default class Carrinho {
  constructor(readonly itens: ItemCarrinho[] = []) {}

  adicionarItem(produto: Produto): Carrinho {
    const item = this.itemPorProduto(produto);
    if (item) {
      return new Carrinho(this.alterarQuantidadeItem(this.itens, produto, 1));
    } else {
      return new Carrinho([...this.itens, { produto, quantidade: 1 }]);
    }
  }

  removerItem(produto: Produto) {
    const item = this.itemPorProduto(produto);
    if (!item) return this;

    return new Carrinho(this.alterarQuantidadeItem(this.itens, produto, -1));
  }

  removerProduto(produto: Produto) {
    const item = this.itemPorProduto(produto);
    if (!item) return this;

    return new Carrinho(
      this.itens.filter((item) => item.produto.id !== produto.id)
    );
  }

  limpar() {
    return new Carrinho();
  }

  get qtdeItens() {
    return this.itens.map((item) => item.quantidade).reduce((a, b) => a + b, 0);
  }

  get valorTotal() {
    return this.itens
      .map((item) => item.produto.precoPromocional * item.quantidade)
      .reduce((a, b) => a + b, 0);
  }

  get valorTotalCheio() {
    return this.itens
      .map((item) => item.produto.precoBase * item.quantidade)
      .reduce((a, b) => a + b, 0);
  }

  private itemPorProduto(produto: Produto): ItemCarrinho | undefined {
    return this.itens.find((item) => item.produto.id === produto.id);
  }

  private alterarQuantidadeItem(
    itens: ItemCarrinho[],
    produto: Produto,
    diferenca: number
  ): ItemCarrinho[] {
    return itens
      .map((i) =>
        i.produto.id === produto.id
          ? { ...i, quantidade: i.quantidade + diferenca }
          : i
      )
      .filter((i) => i.quantidade > 0);
  }
}
