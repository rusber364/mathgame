import { mixingArray } from './mixingArray'

test('mixingArray', () => {
  const arr = [1, 2, 3, 4]

  expect(mixingArray(arr)).toHaveLength(arr.length)
})
