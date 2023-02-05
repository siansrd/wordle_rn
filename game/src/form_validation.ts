type CheckWordLength = (word: string) => boolean
type CreateCheckWordLength = (length: number) => CheckWordLength

export const createCheckWordLength: CreateCheckWordLength = (
  length: number
): CheckWordLength => {
  return (word) => word.length === length
}
