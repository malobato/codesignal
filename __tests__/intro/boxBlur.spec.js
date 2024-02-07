import { expect, test } from 'vitest'
import * as boxBlur from '../../modules/intro/boxBlur'

test('BoxBlur working test', () => {
  const image = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
  ]
  const expectedResult = [
    [5, 4],
    [4, 4]
  ]
  expect(boxBlur.solution(image)).toEqual(expectedResult)
})
