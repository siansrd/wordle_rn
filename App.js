import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native"
import { StyleSheet, Text, View, Platform } from "react-native"
import Game from "./components/Game"

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={[styles.appContainer]}>
        <Text style={styles.title}>Worldle</Text>
        <View style={styles.gameContainer}>
          <Game />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginHorizontal: 30,
  },
})
