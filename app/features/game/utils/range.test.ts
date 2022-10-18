import { range, rangeLength } from './range'

test('create array range 1 to 10', () => {
  const result = range(1, 10)
  expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(result).toHaveLength(10)
})

test('create array range 5 to 7', () => {
  const result = range(5, 7)
  expect(result).toStrictEqual([5, 6, 7])
  expect(result).toHaveLength(3)
})

test('create array range 0 to 3', () => {
  const result = range(0, 3)
  expect(result).toStrictEqual([0, 1, 2, 3])
  expect(result).toHaveLength(4)
})

test('create array range with length "3"', () => {
  const result = rangeLength(3)
  expect(result).toStrictEqual([0, 1, 2])
  expect(result).toHaveLength(3)
})
