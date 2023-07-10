import { getRandomNumber } from './getRandomNumber'

type Options = {
  max?: number
  min?: number
  letter?: string
}

export function loopReplaceLetter(operation: string, options: Options = {}) {
  const { letter = 'N', max, min } = options
  while (operation.includes(letter)) {
    operation = operation.replace(letter, String(getRandomNumber(max, min)))
  }

  return operation
}
