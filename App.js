import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Game from "./components/Game"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Worldle</Text>
      <StatusBar style="auto" />
      <Game />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
