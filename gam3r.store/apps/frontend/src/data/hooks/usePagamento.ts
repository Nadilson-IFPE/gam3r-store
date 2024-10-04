import { useContext } from "react";
import ContextoPagamento from "../contexts/ContextoPagamento";

const usePagamento = () => useContext(ContextoPagamento);
export default usePagamento;
