import { Produto } from "@gstore/core";
import { View, Text, StyleSheet } from "react-native";
import Cores from "@/src/data/constants/Cores";

export interface EspecificacoesProps {
  produto: Produto;
}

export default function Especificacoes(props: EspecificacoesProps) {
  const { produto } = props;
  return (
    <View style={styles.container}>
      {produto?.especificacoes &&
        Object.keys(produto?.especificacoes!)
          .filter((k) => k !== "destaque")
          .map((chave) => (
            <View key={chave} style={styles.especificacao}>
              <Text style={styles.nome}>{chave}</Text>
              <Text style={styles.valor}>{produto?.especificacoes[chave]}</Text>
            </View>
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  especificacao: {
    flexDirection: "row",
    gap: 10,
  },
  nome: {
    color: "white",
    width: "35%",
    backgroundColor: Cores.PRIMARIA,
    padding: 8,
    borderRadius: 6,
  },
  valor: {
    flex: 1,
    color: "white",
    backgroundColor: Cores.PRIMARIA,
    padding: 8,
    borderRadius: 6,
  },
});
