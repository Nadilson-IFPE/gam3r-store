import { Produto } from "../produto";

export default interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}
