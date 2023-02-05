export type CheckGuess = (guess: string) => boolean
type CreateCheckGuess = (answer: string) => CheckGuess

export enum LetterResult {
  correct = 'CORRECT',
  incorrectPosition = 'INCORRECT_POSITION',
  incorrect = 'INCORRECT',
}

export const createCheckGuess: CreateCheckGuess = (answer): CheckGuess => {
  return (guess) => {
    return answer === guess
  }
}
export const addGuess = (guess: string, guesses: string[]): string[] => {
  return [...guesses, guess]
}

export const getLetterResult = (
  guess: string,
  answer: string,
  position: number
): LetterResult => {
  return answer[position] === guess
    ? LetterResult.correct
    : answer.includes(guess)
    ? LetterResult.incorrectPosition
    : LetterResult.incorrect
}
