import { LinearGradient } from "expo-linear-gradient";
import { Moeda, Produto } from "@gstore/core";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NotaReview from "../shared/NotaReview";
import useCarrinho from "../../data/hooks/useCarrinho";
import useParcelamento from "../../data/hooks/useParcelamento";
import Cores from "@/src/data/constants/Cores";

export interface ProdutoItemProps {
  produto: Produto;
  produtoSelecionado?: (produto: Produto) => void;
}

export default function ProdutoItem(props: ProdutoItemProps) {
  const { adicionarItem } = useCarrinho();
  const parcelamento = useParcelamento(props.produto.precoPromocional);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.produto}
        onPress={() => props.produtoSelecionado?.(props.produto)}
      >
        <Image
          src={props.produto.imagem}
          style={styles.imagem}
          alt="Imagem do Produto"
        />
        <View style={{ flex: 1 }}>
          <View style={styles.reviewContainer}>
            <NotaReview nota={props.produto.nota} />
          </View>
          <Text style={styles.nome}>{props.produto.nome}</Text>
          <Text style={styles.precoCheio}>
            de {Moeda.formatar(props.produto.precoBase)}
          </Text>
          <View style={styles.precoContainer}>
            <Text style={{ color: "white" }}>por</Text>
            <Text style={styles.preco}>
              {Moeda.formatar(props.produto.precoPromocional)}
            </Text>
          </View>
          <Text style={styles.parcelamento}>
            ou {parcelamento.qtdeParcelas}x de{" "}
            {Moeda.formatar(parcelamento.valorParcela)}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.botao}
        onPress={(e) => {
          e.preventDefault();
          adicionarItem(props.produto);
        }}
      >
        <Ionicons name="cart-outline" size={22} style={styles.botaoTexto} />
        <Text style={styles.botaoTexto}>Adicionar</Text>
      </Pressable>
      <LinearGradient
        colors={["transparent", "#7811F5", "transparent"]}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        style={styles.bordaInferior}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    maxWidth: Dimensions.get("window").width,
  },
  produto: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  precoCheio: {
    fontSize: 14,
    color: "#AAA",
    textDecorationLine: "line-through",
  },
  precoContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  preco: {
    fontSize: 24,
    color: "#34d399",
    fontWeight: "bold",
  },
  parcelamento: {
    fontSize: 14,
    color: "#FFF",
  },
  botao: {
    color: "#FFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Cores.PRIMARIA,
    alignSelf: "center",
    borderRadius: 9999,
    height: 40,
    paddingHorizontal: 80,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
  bordaInferior: {
    marginTop: 20,
    height: 2,
    width: Dimensions.get("window").width,
  },
});
