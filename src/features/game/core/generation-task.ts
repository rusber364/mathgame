import { evaluate, round } from 'mathjs'
import { maxRandomNumbersMap, operators } from './operators'
import { getRandomOperator } from '../utils/get-random-operator'
import { getRandomNumber } from '../utils/get-random-number'
import { mixingArray } from '../utils/mixing-array'
import { antiRandomDoubleAnswer } from './anti-random-double-answer'
import { replacingLettersWithRandom } from '../utils/replacing-letters-with-random'

export type TTask = ReturnType<typeof generationTask>

export function generationTask(template?: string) {
  if (template) {
    const expression = replacingLettersWithRandom(template)
    const result = round(evaluate(expression), 2) as number
    const answers = mixingArray(antiRandomDoubleAnswer(result, 4))

    return { answers, expression, result }
  }
  const operator = getRandomOperator(operators)
  const maxRandomNumber = maxRandomNumbersMap[operator]
  const operandLeft = getRandomNumber(maxRandomNumber)
  const operandRight = getRandomNumber(maxRandomNumber)
  const operation = []
  const expression = `${operandLeft} ${operator} ${operandRight}`

  operation.push(operandLeft, operator, operandRight)
  const operationToString = operation.join('')

  const result = round(evaluate(operationToString), 2) as number
  const answers = mixingArray(antiRandomDoubleAnswer(result, 4))

  return { answers, expression, result }
}
