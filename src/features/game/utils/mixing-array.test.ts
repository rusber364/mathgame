import { mixingArray } from './mixing-array'

test('mixingArray should return a shuffled version of the input array', () => {
  const arr = [1, 2, 3, 4]
  const mixedArray = mixingArray(arr)
  expect(mixedArray).toHaveLength(arr.length)
  expect(mixedArray).not.toEqual(arr)
})

test('mixingArray should return an empty array when given an empty array', () => {
  const emptyArray: number[] = []
  const result = mixingArray(emptyArray)
  expect(result).toHaveLength(0)
  expect(result).toEqual(emptyArray)
})

test('mixingArray should not modify the original array', () => {
  const arr = [1, 2, 3, 4]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mixedArray = mixingArray(arr)
  expect(arr).toEqual([1, 2, 3, 4])
})

test('mixingArray should handle arrays with repeated elements', () => {
  const arr = [1, 1, 2, 2, 3, 3]
  const mixedArray = mixingArray(arr)
  expect(mixedArray).toHaveLength(arr.length)
  expect(mixedArray).not.toEqual(arr)
})
