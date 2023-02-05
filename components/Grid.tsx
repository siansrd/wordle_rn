import { View } from "react-native"
import Row from "./Row"
import { GUESSES } from "../game/game_config"

type GridProps = {
  guesses: string[]
  answer: string
}

const Grid = ({ guesses, answer }: GridProps) => {
  const rows = [...Array(GUESSES)].map((_, i) => {
    const word = guesses[i]
    return (
      <Row
        answer={answer}
        word={word ? word : "     "}
        key={i}
      />
    )
  })
  return <View>{rows}</View>
}

export default Grid
