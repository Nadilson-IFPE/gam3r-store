import { Produto } from '../produto'

export default interface ItemPedido {
    id: number
    produto: Produto
    quantidade: number
    precoUnitario: number
}
