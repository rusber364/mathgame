import { evaluate } from 'mathjs'
import { vi } from 'vitest'
import { loopReplaceLetter } from './loopReplaceLetter'

vi.mock('./getRandomNumber', () => {
  function* generator() {
    for (let randomNum of [20, 10, 30]) {
      yield randomNum
    }
  }
  const iters = generator()

  return {
    getRandomNumber: () => iters.next().value,
  }
})

afterEach(() => {
  vi.clearAllMocks()
})

test('replace letter random numbers', () => {
  const operation = loopReplaceLetter('N / (N + N)')
  expect(operation).toStrictEqual('20 / (10 + 30)')
  expect(evaluate(operation)).toBe(0.5)
})
