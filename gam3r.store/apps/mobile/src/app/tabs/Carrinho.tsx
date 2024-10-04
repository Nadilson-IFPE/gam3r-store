import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ItemCarrinho } from "@gstore/core";
import CabecalhoCheckout from "@/src/components/checkout/CabecalhoCheckout";
import Cores from "@/src/data/constants/Cores";
import useCarrinho from "@/src/data/hooks/useCarrinho";
import CarrinhoVazio from "@/src/components/checkout/carrinho/CarrinhoVazio";
import CarrinhoItem from "@/src/components/checkout/carrinho/CarrinhoItem";

export default function Carrinho({ navigation }: any) {
  const { itens, qtdeItens, adicionarItem, removerItem, removerProduto } =
    useCarrinho();

  return (
    <SafeAreaView style={styles.container}>
      <CabecalhoCheckout passo="carrinho" />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, width: "100%" }}
      >
        {itens.length === 0 && <CarrinhoVazio />}
        {itens.map((item: ItemCarrinho) => (
          <CarrinhoItem
            key={item.produto.id}
            item={item}
            adicionarItem={() => adicionarItem(item.produto)}
            removerItem={() => removerItem(item.produto)}
            removerProduto={() => removerProduto(item.produto)}
          />
        ))}
      </ScrollView>
      {qtdeItens > 0 && (
        <Pressable
          style={styles.botao}
          onPress={() => {
            navigation.navigate("Pagamento");
          }}
        >
          <Ionicons name="card-outline" size={22} style={styles.botaoTexto} />
          <Text style={styles.botaoTexto}>Continuar</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E001D",
    width: "100%",
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
    marginVertical: 20,
    paddingHorizontal: 50,
    gap: 8,
  },
  botaoTexto: {
    color: "#FFF",
  },
});
