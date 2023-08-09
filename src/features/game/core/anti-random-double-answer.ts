import { getRandomNumber } from '../utils/get-random-number'

export function antiRandomDoubleAnswer(result: number, count = 5, range = 10) {
  const answersMap: number[] = [result]

  while (answersMap.length < count) {
    let randomAnswer = getRandomNumber(result + range, result - range)

    if (!answersMap.includes(randomAnswer)) {
      answersMap.push(randomAnswer)
    }
  }

  return answersMap
}
