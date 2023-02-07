import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { ANSWER } from "../game/game_config"
import { addGuess, CheckGuess, createCheckGuess } from "../game/src/game"
import Grid from "./Grid"
import GuessForm from "./GuessForm"

const Game = () => {
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [guesses, setGuesses] = useState<string[]>([])

  const checkGuess: CheckGuess = createCheckGuess(ANSWER)

  const submitGuess = (guess: string) => {
    setGuesses(addGuess(guess, guesses))
    setGameWon(checkGuess(guess))
  }

  return (
    <View>
      <Grid
        guesses={guesses}
        answer={ANSWER}
      />
      {!gameWon && <GuessForm submitGuess={submitGuess} />}
    </View>
  )
}

export default Game
