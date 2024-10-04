import { Ionicons } from "@expo/vector-icons";
import { Moeda } from "@gstore/core";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Cores from "@/src/data/constants/Cores";
import Parcelamento from "@gstore/core/src/parcelamento/Parcelamento";

export interface ResumoPagamentoProps {
  qtdeItens: number;
  valorTotal: number;
  valorTotalCheio: number;
  parcelamento: Parcelamento;
  finalizarCompra: () => void;
  className?: string;
}

export default function ResumoPagamento(props: ResumoPagamentoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.valorItens}>
        <Text style={{ color: "white" }}>
          Valor total ({props.qtdeItens} itens):{" "}
        </Text>
        <Text style={styles.valorItensDestaque}>
          {Moeda.formatar(props.valorTotal)}
        </Text>
      </View>
      <Pressable style={styles.botao} onPress={() => props.finalizarCompra?.()}>
        <Ionicons name="cart-outline" size={22} style={styles.botaoTexto} />
        <Text style={styles.botaoTexto}>Finalizar Compra</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: "#241440",
    borderRadius: 10,
    gap: 10,
  },
  valorItens: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valorItensDestaque: {
    color: "#34d399",
    fontWeight: "bold",
  },
  botao: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Cores.PRIMARIA,
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 45,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
});
