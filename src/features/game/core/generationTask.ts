import { evaluate } from 'mathjs'
import { maxRandomNumbersMap, operators } from './operators'
import { getRandomOperator } from '../utils/getRandomOperator'
import { getRandomNumber } from '../utils/getRandomNumber'
import { mixingArray } from '../utils/mixingArray'
import { antiRandomDoubleAnswer } from './antiRandomDoubleAnswer'
import { replacingLettersWithRandom } from '../utils/replacingLettersWithRandom'

export type TTask = ReturnType<typeof generationTask>

export function generationTask(template?: string) {
  if (template) {
    const expression = replacingLettersWithRandom(template)
    const result = +Number(evaluate(expression)).toPrecision(3)
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

  const result = +Number(evaluate(operationToString)).toPrecision(3)
  const answers = mixingArray(antiRandomDoubleAnswer(result, 4))

  return { answers, expression, result }
}
