import { mixingArray } from './mixing-array'

test('mixingArray', () => {
  const arr = [1, 2, 3, 4]

  expect(mixingArray(arr)).toHaveLength(arr.length)
})
