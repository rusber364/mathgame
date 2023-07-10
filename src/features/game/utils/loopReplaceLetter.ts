import { getRandomNumber } from './getRandomNumber'

export function loopReplaceLetter(operation: string, letter = 'N') {
  while (operation.includes(letter)) {
    operation = operation.replace(letter, String(getRandomNumber()))
  }

  return operation
}
