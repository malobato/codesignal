import { expect, test } from 'vitest'
import * as differentSquares from './modules/differentSquares'

test('Different squares', () => {
  expect(
    differentSquares.solution([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])
  ).toEqual(6)
})
