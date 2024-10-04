import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export interface NotaReviewProps {
  nota: number;
  tamanho?: number;
}

export default function NotaReview(props: NotaReviewProps) {
  function notaParaEstrelas(nota: number) {
    const estrelas: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push(
          <Ionicons key={i} name="star" size={16} style={styles.icone} />
        );
      } else if (nota >= i - 0.5) {
        estrelas.push(
          <Ionicons key={i} name="star-half" size={16} style={styles.icone} />
        );
      } else {
        estrelas.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={16}
            style={styles.icone}
          />
        );
      }
    }
    return estrelas;
  }

  return <View style={styles.container}>{notaParaEstrelas(props.nota)}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 0.5,
    color: "#34d399",
  },
  icone: {
    color: "#34d399",
  },
});
