import { expect, test } from 'vitest'
import * as bishopAndPawn from './modules/intro/bishopAndPawn'

test('Bishop and pawn working case', () => {
  expect(bishopAndPawn.solution('a1', 'c3')).toEqual(true)
})
