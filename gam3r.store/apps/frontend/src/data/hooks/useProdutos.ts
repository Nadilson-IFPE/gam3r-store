import { useContext } from "react";
import ContextoProdutos from "../contexts/ContextoProdutos";

const useProdutos = () => useContext(ContextoProdutos);
export default useProdutos;
