import { StyleSheet, View } from "react-native"
import { WORD_LENGTH } from "../game/game_config"
import { getLetterResult, LetterResult } from "../game/src/game"
import Box from "./Box"

type RowProps = {
  word: string
  answer: string
}

const Row = ({ word, answer }: RowProps) => {
  const boxes = [...Array(WORD_LENGTH)].map((_, i) => {
    const guessLetter = word[i]
    const guessLetterResult = getLetterResult(guessLetter, answer, i)
    const backgroundColour =
      guessLetterResult === LetterResult.correct
        ? "green"
        : guessLetterResult === LetterResult.incorrectPosition
        ? "orange"
        : "grey"
    return (
      <Box
        letter={word[i]}
        key={i}
        backgroundColour={backgroundColour}
      />
    )
  })

  return <View style={styles.rowContainer}>{boxes}</View>
}

export default Row

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
})
