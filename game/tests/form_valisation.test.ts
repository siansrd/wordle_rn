import { createCheckWordLength } from '../src/form_validation'

const wordLength = 5
const checkWordLength = createCheckWordLength(wordLength)

describe('form validation', () => {
  describe('checkWordLenth', () => {
    it('should return true if word matches specified length', () => {
      expect(checkWordLength('hello')).toBe(true)
    })

    it('should return false if word is shorter than specified length', () => {
      expect(checkWordLength('hell')).toBe(false)
    })

    it('should return false is word is longer than specified length', () => {
      expect(checkWordLength('hellos')).toBe(false)
    })
  })

  describe('createCheckWordLength', () => {
    it('should return true if number passed matches word length', () => {
      expect(createCheckWordLength(wordLength)('hello')).toBe(true)
    })
  })
})
