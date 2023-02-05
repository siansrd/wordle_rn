import { StyleSheet, View, Text } from "react-native"

type BoxProps = {
  letter: string
  backgroundColour: string
}

const Box = ({ letter, backgroundColour }: BoxProps) => {
  return (
    <View style={[styles.boxContainer, { backgroundColor: backgroundColour }]}>
      <Text>{letter}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },
})
