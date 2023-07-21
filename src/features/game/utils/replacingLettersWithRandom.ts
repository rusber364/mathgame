import { getRandomNumber } from './getRandomNumber'
import { maxRandomNumbersMap, TOperator } from '../core/operators'
import * as math from 'mathjs'

type Options = {
  max?: number
  min?: number
  letter?: string
}

export function replacingLettersWithRandom(operation: string, options: Options = {}) {
  const { letter = 'N', max, min } = options

  const transformOperation = math.parse(operation).transform((node, _, parent) => {
    if (node instanceof math.SymbolNode && node.name === letter && parent instanceof math.OperatorNode) {
      const operator = parent.op as TOperator
      const maxRandomNumber = maxRandomNumbersMap[operator]

      return new math.ConstantNode(getRandomNumber(max ?? maxRandomNumber, min ?? -maxRandomNumber))
    }

    return node
  })

  return transformOperation.toString()
}
