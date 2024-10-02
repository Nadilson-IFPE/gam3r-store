import Especificacoes from "./Especificacoes";
import Precificavel from "./Precificavel";

export default interface Produto extends Precificavel {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  nota: number;
  videoReview: string;
  tags: string[];
  especificacoes: Especificacoes;
}
