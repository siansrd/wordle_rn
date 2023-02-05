import React, { useState } from "react"
import { TextInput, Text, Button } from "react-native"
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
    <>
      <TextInput
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
    </>
  )
}

export default GuessForm
