import * as math from 'mathjs'

import { maxRandomNumbersMap, TOperator } from '../core/operators'
import { getRandomNumber } from './get-random-number'

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

      let randomNumber

      while (randomNumber === Infinity || randomNumber === -Infinity || !randomNumber) {
        randomNumber = getRandomNumber(max ?? maxRandomNumber, min ?? -maxRandomNumber)
      }

      return new math.ConstantNode(randomNumber)
    }

    return node
  })

  return transformOperation.toString()
}
