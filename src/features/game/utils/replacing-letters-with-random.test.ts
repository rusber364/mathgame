import { evaluate } from 'mathjs'

import { getRandomNumber } from './get-random-number'
import { replacingLettersWithRandom } from './replacing-letters-with-random'

const getRandomNumberMocked = getRandomNumber as jest.Mock

jest.mock('./get-random-number', () => ({
  getRandomNumber: jest.fn(),
}))

function setFakeGetRandomNumber(randomNumbers: number[]) {
  getRandomNumberMocked.mockClear()
  randomNumbers.forEach((number) => getRandomNumberMocked.mockImplementationOnce(() => number))
}

test('replace letter for "N / (N + N)" -> "20 / (10 + 30)"', () => {
  setFakeGetRandomNumber([20, 10, 30])

  const operation = replacingLettersWithRandom('N / (N + N)')
  expect(operation).toStrictEqual('20 / (10 + 30)')
  expect(evaluate(operation)).toBe(0.5)
  expect(getRandomNumber).toBeCalledTimes(3)
})

test('replace letter for "N + N" -> "53 + 20"', () => {
  setFakeGetRandomNumber([53, 20])
  const operation = replacingLettersWithRandom('N + N')
  expect(operation).toStrictEqual('53 + 20')
  expect(evaluate(operation)).toBe(73)
  expect(getRandomNumber).toBeCalledTimes(2)
})

test('replace letter for "N - N" -> "12 - 20"', () => {
  setFakeGetRandomNumber([12, 20])

  const operation = replacingLettersWithRandom('N - N')
  expect(operation).toStrictEqual('12 - 20')
  expect(evaluate(operation)).toBe(-8)
  expect(getRandomNumber).toBeCalledTimes(2)
})

test('replace letter for "N * N" -> "3 * 7"', () => {
  setFakeGetRandomNumber([3, 7])

  const operation = replacingLettersWithRandom('N * N')
  expect(operation).toStrictEqual('3 * 7')
  expect(evaluate(operation)).toBe(21)
  expect(getRandomNumber).toBeCalledTimes(2)
})

test('replace letter for "N / N" -> "60 / 10"', () => {
  setFakeGetRandomNumber([60, 10])

  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('60 / 10')
  expect(evaluate(operation)).toBe(6)
  expect(getRandomNumber).toBeCalledTimes(2)
})

test('replace letter for "N / N" -> "10 / -0"', () => {
  setFakeGetRandomNumber([10, -0, -2])

  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('10 / -2')
  expect(evaluate(operation)).not.toBe(-Infinity)
  expect(evaluate(operation)).toBe(-5)
  expect(getRandomNumber).toBeCalledTimes(3)
})

test('replace letter for "N / N" -> "10 / 0"', () => {
  setFakeGetRandomNumber([10, 0, 2])

  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('10 / 2')
  expect(evaluate(operation)).not.toBe(Infinity)
  expect(evaluate(operation)).toBe(5)
  expect(getRandomNumber).toBeCalledTimes(3)
})
