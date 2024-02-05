import { expect, test } from 'vitest'
import * as spiralNumbers from './modules/spiralNumbers'

test('Spiral numbers working case', () => {
  expect(spiralNumbers.solution(3))
    .toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ])
})
