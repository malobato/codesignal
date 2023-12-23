import { test, expect } from 'vitest'
import * as minesweeper from '../modules/minesweeper'

test('Minesweeper working test', () => {
  const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]
  const result = [
    [1, 2, 1],
    [2, 1, 1],
    [1, 1, 1]
  ]
  expect(minesweeper.solution(matrix)).toEqual(result)
})
