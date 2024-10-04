import { PedidoEntrega } from "@gstore/core";
import { TextInput, StyleSheet, View } from "react-native";
import React from "react";

export interface FormularioEntregaProps {
  entrega: Partial<PedidoEntrega>;
  entregaMudou: (entrega: Partial<PedidoEntrega>) => void;
  className?: string;
}

export default function FormularioEntrega(props: FormularioEntregaProps) {
  const { entrega, entregaMudou } = props;

  function alterarAtributo(atributo: string) {
    return (valor: any) => {
      entregaMudou({ ...entrega, [atributo]: valor });
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={entrega.nome}
        onChangeText={alterarAtributo("nome")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={entrega.email}
        onChangeText={alterarAtributo("email")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={entrega.cpf}
        onChangeText={alterarAtributo("cpf")}
        keyboardType="numeric"
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={entrega.logradouro}
        onChangeText={alterarAtributo("logradouro")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={entrega.complemento}
        onChangeText={alterarAtributo("complemento")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={entrega.cidade}
        onChangeText={alterarAtributo("cidade")}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={entrega.estado}
        onChangeText={alterarAtributo("estado")}
        placeholderTextColor="#999"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  input: {
    height: 40,
    width: 300,
    color: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#241440",
  },
});
