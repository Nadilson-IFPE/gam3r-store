import { Status } from "./Status";
import { FormaPagamento } from "./FormaPagamento";
import ItemPedido from "./ItemPedido";
import PedidoEntrega from "./PedidoEntrega";

export default interface Pedido {
  id: number;
  data: Date;
  itens: ItemPedido[];
  valorTotal: number;
  status: Status;
  formaPagamento: FormaPagamento;
  entrega: PedidoEntrega;
}
