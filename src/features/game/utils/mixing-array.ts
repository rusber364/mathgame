import { getRandomNumber } from './get-random-number'

export function mixingArray<T>(values: T[]): T[] {
  const copyValues = values.slice()
  const mixedArray: T[] = []

  while (copyValues.length) {
    const randomIndex = getRandomNumber(copyValues.length - 1, 0)
    const [value] = copyValues.splice(randomIndex, 1)
    mixedArray.push(value)
  }

  return mixedArray
}
