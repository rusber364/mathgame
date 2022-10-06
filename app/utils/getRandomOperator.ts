import type { TOperator } from '../core/operators'
import { getRandomNumber } from './getRandomNumber'

export function getRandomOperator(operators: TOperator[]) {
  return operators[getRandomNumber(operators.length) - 1]
}
