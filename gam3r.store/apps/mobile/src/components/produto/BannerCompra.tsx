import { Ionicons } from "@expo/vector-icons";
import { Moeda, Produto } from "@gstore/core";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Cores from "@/src/data/constants/Cores";
import useCarrinho from "@/src/data/hooks/useCarrinho";
import useParcelamento from "@/src/data/hooks/useParcelamento";

export interface BannerCompraProps {
  produto: Produto;
}

export default function BannerCompra(props: BannerCompraProps) {
  const { produto } = props;
  const { adicionarItem } = useCarrinho();
  const parcelamento = useParcelamento(produto.precoPromocional);

  return (
    <View style={styles.container}>
      <View style={styles.containerPreco}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 3,
            borderRightColor: Cores.PRIMARIA,
          }}
        >
          <Text style={styles.valorCheio}>de R$ {produto?.precoBase}</Text>
          <View style={styles.precoPromocional}>
            <Text style={styles.valor}>por</Text>
            <Text style={styles.valorDestaque}>
              {Moeda.formatar(produto?.precoPromocional)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.valor}>até {parcelamento.qtdeParcelas}x de</Text>
          <Text style={styles.valor}>
            {Moeda.formatar(parcelamento.valorParcela)}
          </Text>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Pressable
          onPress={() => adicionarItem(produto)}
          style={{ ...styles.botao, backgroundColor: Cores.PRIMARIA }}
        >
          <Ionicons style={styles.botaoTexto} name="cart-outline" size={20} />
          <Text style={styles.botaoTexto}>Adicionar</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            ...styles.botao,
            backgroundColor: Cores.SECUNDARIA,
          }}
        >
          <Ionicons style={styles.botaoTexto} name="card-outline" size={20} />
          <Text style={styles.botaoTexto}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 30,
  },
  containerPreco: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valorCheio: {
    textDecorationLine: "line-through",
    color: "#C4C4C4",
  },
  precoPromocional: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  valor: {
    fontSize: 16,
    color: "white",
  },
  valorDestaque: {
    fontSize: 20,
    fontWeight: "bold",
    color: Cores.TEXTO_DESTAQUE_1,
  },
  botao: {
    color: "#FFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 9999,
    height: 35,
    paddingHorizontal: 80,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
});
