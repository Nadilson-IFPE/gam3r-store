import FiltroProduto from "@/components/produto/FiltroProduto";
import ListaProdutos from "@/components/produto/ListaProdutos";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col container gap-5 py-10">
      <FiltroProduto />
      <ListaProdutos />
    </div>
  );
}
