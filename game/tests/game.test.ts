import {
  addGuess,
  createCheckGuess,
  getLetterResult,
  LetterResult,
} from '../src/game'
const checkGuess = createCheckGuess('A')

describe('checkGuess', () => {
  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess('A')).toEqual(true)
  })

  test('it should return true if guess and answer are the same', () => {
    expect(checkGuess('B')).toEqual(false)
  })
})

describe('createCheckGuess', () => {
  const ANSWER = 'A'

  test('it should return true if the string it is passed matches the string passed to the returned function', () => {
    expect(createCheckGuess(ANSWER)('A')).toBe(true)
  })

  test('it should return false if the string it is passed does not match the string passed to the returned function', () => {
    expect(createCheckGuess(ANSWER)('B')).toBe(false)
  })
})

describe('addGuess', () => {
  test('it should add new guess to array of guesses', () => {
    expect(addGuess('B', ['A'])).toEqual(['A', 'B'])
  })
})

describe('getLetterResult', () => {
  test('it should return "CORRECT" if letter matches in right place', () => {
    expect(getLetterResult('A', 'AUDIO', 0)).toBe(LetterResult.correct)
  })

  test('it should return "INCORRECT_POSITION if letter matches in wrong place', () => {
    expect(getLetterResult('A', 'AUDIO', 1)).toBe(
      LetterResult.incorrectPosition
    )
  })

  test('it should return "INCORRECT" if letter doesnt match', () => {
    expect(getLetterResult('B', 'AUDIO', 0)).toBe(LetterResult.incorrect)
  })
})
