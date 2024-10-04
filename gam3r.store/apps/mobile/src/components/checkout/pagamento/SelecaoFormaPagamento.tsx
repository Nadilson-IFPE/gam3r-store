import { FormaPagamento } from "@gstore/core";
import { View, Text, Pressable, StyleSheet } from "react-native";

export interface SelecaoFormaPagamentoProps {
  formaPagamento?: FormaPagamento;
  formaPagamentoMudou?: (value: FormaPagamento) => void;
  className?: string;
}

export default function SelecaoFormaPagamento(
  props: SelecaoFormaPagamentoProps
) {
  function renderizarItem(label: string, formaPagamento: FormaPagamento) {
    const selecionado = props.formaPagamento === formaPagamento;
    return (
      <Pressable
        key={formaPagamento}
        style={styles.opcaoContainer}
        onPress={() => props.formaPagamentoMudou?.(formaPagamento)}
      >
        <View style={styles.opcaoSeletor}>
          {selecionado && <View style={styles.selecao} />}
        </View>
        <Text style={styles.texto}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {renderizarItem("Pagamento no PIX", FormaPagamento.PIX)}
      {renderizarItem("Boleto Bancário", FormaPagamento.BOLETO)}
      {renderizarItem("Cartão de Crédito", FormaPagamento.CARTAO)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  opcaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  opcaoSeletor: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8247E5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selecao: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8247E5",
  },
  texto: {
    fontSize: 16,
    color: "#FFF",
  },
});
