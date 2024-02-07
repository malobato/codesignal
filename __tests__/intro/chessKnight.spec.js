import { expect, test } from 'vitest'
import * as chessKnight from './modules/intro/chessKnight'

test('Chess knight working case', () => {
  expect(chessKnight.solution('a1')).toEqual(2)
})
