import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLocalStorage() {
  const obterItem = useCallback(async (chave: string) => {
    const valorLocal = await AsyncStorage.getItem(chave);
    return valorLocal ? JSON.parse(valorLocal) : null;
  }, []);

  const salvarItem = useCallback(async (chave: string, valor: any) => {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  }, []);

  return { obterItem, salvarItem };
}
