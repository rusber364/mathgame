import { evaluate } from 'mathjs'
import { vi } from 'vitest'
import { replacingLettersWithRandom } from './replacingLettersWithRandom'

let instance: Generator

vi.mock('./getRandomNumber', () => ({
  getRandomNumber: () => instance.next().value,
}))

function fakeGetRandomNumber(randomNumbers: number[]) {
  function* generator() {
    for (let randomNum of randomNumbers) {
      yield randomNum
    }
  }

  return generator()
}

test('replace letter for "N / (N + N)" -> "20 / (10 + 30)"', () => {
  instance = fakeGetRandomNumber([20, 10, 30])
  const operation = replacingLettersWithRandom('N / (N + N)')
  expect(operation).toStrictEqual('20 / (10 + 30)')
  expect(evaluate(operation)).toBe(0.5)
})

test('replace letter for "N + N" -> "53 + 20"', () => {
  instance = fakeGetRandomNumber([53, 20])
  const operation = replacingLettersWithRandom('N + N')
  expect(operation).toStrictEqual('53 + 20')
  expect(evaluate(operation)).toBe(73)
})

test('replace letter for "N - N" -> "12 - 20"', () => {
  instance = fakeGetRandomNumber([12, 20])
  const operation = replacingLettersWithRandom('N - N')
  expect(operation).toStrictEqual('12 - 20')
  expect(evaluate(operation)).toBe(-8)
})

test('replace letter for "N * N" -> "3 * 7"', () => {
  instance = fakeGetRandomNumber([3, 7])
  const operation = replacingLettersWithRandom('N * N')
  expect(operation).toStrictEqual('3 * 7')
  expect(evaluate(operation)).toBe(21)
})

test('replace letter for "N / N" -> "60 / 10"', () => {
  instance = fakeGetRandomNumber([60, 10])
  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('60 / 10')
  expect(evaluate(operation)).toBe(6)
})

test('replace letter for "N / N" -> "10 / -0"', () => {
  instance = fakeGetRandomNumber([10, -0, -2])
  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('10 / -2')
  expect(evaluate(operation)).not.toBe(-Infinity)
  expect(evaluate(operation)).toBe(-5)
})

test('replace letter for "N / N" -> "10 / 0"', () => {
  instance = fakeGetRandomNumber([10, 0, 2])
  const operation = replacingLettersWithRandom('N / N')
  expect(operation).toStrictEqual('10 / 2')
  expect(evaluate(operation)).not.toBe(Infinity)
  expect(evaluate(operation)).toBe(5)
})
