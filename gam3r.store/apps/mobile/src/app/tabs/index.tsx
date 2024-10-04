import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Inicio from "./Inicio";
import Carrinho from "./Carrinho";
import Usuario from "./Usuario";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  function tab(nome: string, componente: any, label: string, icone: string) {
    return (
      <Tab.Screen
        name={nome}
        component={componente}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabScreen}>
              <Ionicons
                name={icone as any}
                size={22}
                color={focused ? "#FFF" : "#CCC"}
              />
              <Text
                style={{
                  ...styles.tabScreenText,
                  color: focused ? "#FFF" : "#CCC",
                }}
              >
                {label}
              </Text>
            </View>
          ),
        }}
      />
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#7811F5",
        tabBarInactiveBackgroundColor: "#7811F5",
        tabBarStyle: {
          backgroundColor: "#7811F5",
        },
      }}
    >
      {tab("Inicio", Inicio, "Início", "home-outline")}
      {tab("Carrinho", Carrinho, "Carrinho", "cart-outline")}
      {tab("Usuario", Usuario, "Usuário", "person-outline")}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    alignItems: "center",
  },
  tabScreenText: {
    fontSize: 14,
  },
});
