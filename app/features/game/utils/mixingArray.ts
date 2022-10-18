import { getRandomNumber } from './getRandomNumber'

export function mixingArray(values: number[]) {
  const copyValues = values.slice()
  const mixedArray = []

  while (copyValues.length) {
    const randomIndex = getRandomNumber(copyValues.length - 1, 0)
    const value = copyValues.splice(randomIndex, 1)
    mixedArray.push(value[0])
  }

  return mixedArray
}
