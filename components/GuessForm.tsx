import React, { useState } from "react"
import { TextInput, Text, Button, StyleSheet, View } from "react-native"
import { WORD_LENGTH } from "../game/game_config"
import { createCheckWordLength } from "../game/src/form_validation"

type Props = {
  submitGuess: (guess: string) => void
}

const checkWordLength = createCheckWordLength(WORD_LENGTH)

const GuessForm = ({ submitGuess }: Props) => {
  const [error, setError] = useState<React.ReactElement>(<></>)

  const handleSubmitGuess = () => {
    if (!checkWordLength(guess)) {
      setError(<Text>needs to be 5 letters</Text>)
    } else {
      setError(<></>)
      submitGuess(guess.toLowerCase())
      setGuess("")
    }
  }

  const [guess, setGuess] = useState<string>("")

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        autoCapitalize={"characters"}
        maxLength={5}
        placeholder="Make a guess"
        value={guess}
        onChangeText={(guess) => setGuess(guess)}
      />

      <Button
        onPress={handleSubmitGuess}
        title="Guess"
      />
      {error}
    </View>
  )
}

export default GuessForm

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 30,
  },
  input: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})
