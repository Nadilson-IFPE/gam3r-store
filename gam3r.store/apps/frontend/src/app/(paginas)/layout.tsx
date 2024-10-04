import Pagina from "@/components/template/Pagina";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
import { ProvedorPagamento } from "@/data/contexts/ContextoPagamento";
import { ProvedorProdutos } from "@/data/contexts/ContextoProdutos";
export default function Layout(props: any) {
  return (
    <ProvedorProdutos>
      <ProvedorCarrinho>
        <ProvedorPagamento>
          <Pagina>{props.children}</Pagina>
        </ProvedorPagamento>
      </ProvedorCarrinho>
    </ProvedorProdutos>
  );
}
