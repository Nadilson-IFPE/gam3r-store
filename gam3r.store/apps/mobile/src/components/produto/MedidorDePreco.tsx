import { Fontisto, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Produto } from "@gstore/core";
import { View, Text, StyleSheet } from "react-native";
import Cores from "@/src/data/constants/Cores";

export interface MedidorDePrecoProps {
  produto: Produto;
}

export default function MedidorDePreco(props: MedidorDePrecoProps) {
  const {
    menorPreco: minimo,
    maiorPreco: maximo,
    precoPromocional: atual,
    precoMedio: media,
  } = props.produto;

  let percentual;
  if (atual > media) {
    percentual = ((atual - media) / (maximo - media)) * 50 + 50;
  } else {
    percentual = (1 - (media - atual) / (media - minimo)) * 50;
  }

  return (
    <View style={styles.container}>
      <View style={styles.statusPreco}>
        {percentual >= 40 && percentual < 60 ? (
          <Fontisto name="confused" size={40} style={{ color: "#eab308" }} />
        ) : percentual >= 60 ? (
          <Fontisto name="mad" size={40} style={{ color: "#ef4444" }} />
        ) : (
          <Fontisto name="smiley" size={40} style={{ color: "#22c55e" }} />
        )}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white" }}>O preço do produto está </Text>
            <Text
              style={{
                color: Cores.TEXTO_DESTAQUE_1,
                fontWeight: "bold",
              }}
            >
              {percentual >= 40 && percentual < 60
                ? "na média"
                : percentual >= 60
                  ? "acima da média"
                  : "abaixo da média"}
            </Text>
          </View>
          <Text style={{ color: "white" }}>
            Com base no preço dos últimos 30 dias.
          </Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <LinearGradient
          colors={["#22c55e", "#facc15", "#ef4444"]}
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          style={styles.barraPreco}
        ></LinearGradient>
        <View style={{ ...styles.posicaoPreco, left: `${percentual}%` }}>
          <Ionicons
            name="chevron-down"
            size={20}
            style={{ color: Cores.TEXTO_DESTAQUE_1 }}
          />
          <View style={styles.circuloPrecoExterno}>
            <View style={styles.circuloPrecoInterno} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  statusPreco: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  barraPreco: {
    position: "relative",
    height: 7,
    borderRadius: 9999,
  },
  posicaoPreco: {
    position: "absolute",
    alignItems: "center",
    top: -25,
  },
  circuloPrecoExterno: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 18,
    width: 18,
    borderRadius: 9999,
  },
  circuloPrecoInterno: {
    backgroundColor: Cores.TEXTO_DESTAQUE_1,
    height: 13,
    width: 13,
    borderRadius: 9999,
  },
});
