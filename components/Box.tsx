import { StyleSheet, View, Text } from "react-native"

type BoxProps = {
  letter: string
  backgroundColour: string
}

const Box = ({ letter, backgroundColour }: BoxProps) => {
  return (
    <View style={[styles.boxContainer, { backgroundColor: backgroundColour }]}>
      <Text style={styles.letter}>{letter.toLocaleUpperCase()}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
  boxContainer: {
    margin: 3,
    minWidth: 60,
    minHeight: 60,
    justifyContent: "center",
  },
  letter: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
})
