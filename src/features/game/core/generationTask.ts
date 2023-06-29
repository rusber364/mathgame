import { maxRandomNumbersMap, operators } from './operators'
import { getRandomOperator } from '../utils/getRandomOperator'
import { getRandomNumber } from '../utils/getRandomNumber'
import { mixingArray } from '../utils/mixingArray'
import { antiRandomDoubleAnswer } from './antiRandomDoubleAnswer'

export type TTask = ReturnType<typeof generationTask>

export function generationTask() {
  const operator = getRandomOperator(operators)
  const maxRandomNumber = maxRandomNumbersMap[operator]
  const operandLeft = getRandomNumber(maxRandomNumber)
  const operandRight = getRandomNumber(maxRandomNumber)
  const operation = []

  operation.push(operandLeft, operator, operandRight)
  const operationToString = operation.join('')

  const result = +Number(eval(operationToString)).toPrecision(3)
  const answers = mixingArray(antiRandomDoubleAnswer(result, 4))

  return { answers, operandLeft, operandRight, operator, result }
}
