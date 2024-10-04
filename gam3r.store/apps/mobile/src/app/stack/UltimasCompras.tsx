import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function UltimasCompras({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Últimas Compras</Text>
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
});
