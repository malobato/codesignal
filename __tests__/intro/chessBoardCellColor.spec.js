import { test, expect } from 'vitest'
import * as chessBoardCellColor from './modules/intro/chessBoardCellColor'

test('Chess board cell color working case', () => {
  expect(chessBoardCellColor.solution('A1', 'C3')).toEqual(true)
  expect(chessBoardCellColor.solution('A1', 'B5')).toEqual(false)
})
