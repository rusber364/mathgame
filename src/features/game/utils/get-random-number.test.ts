import { getRandomNumber } from './get-random-number'

function loopGetRandomNumber(result: number, iter = 100) {
  let _random!: number

  while (iter) {
    _random = getRandomNumber(10, 0)
    if (result === _random) break
    iter--
  }

  return _random
}

describe('generation random number range 0 to 10 with 100 iteration', () => {
  let random!: number

  test('generation random number 0', () => {
    let result = 0

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 1', () => {
    let result = 1

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 2', () => {
    let result = 2

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 3', () => {
    let result = 3

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 4', () => {
    let result = 4

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 5', () => {
    let result = 5

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 6', () => {
    let result = 6

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 7', () => {
    let result = 7

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 8', () => {
    let result = 8

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 9', () => {
    let result = 9

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })

  test('generation random number 10', () => {
    let result = 10

    random = loopGetRandomNumber(result)

    expect(random).toBe(result)
  })
})
