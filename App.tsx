import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Maps from "./src/screens/Map";
import { AppProvider } from "./src/context/AppProvider";
import StatusBarOffset from "./src/components/statusbar";
import Navigation from "./src/naviagation/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <StatusBarOffset />
      <AppProvider>
        <Navigation />
      </AppProvider>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  conteiner: {
    height: "auto",
    width: "100%",
  },
});
