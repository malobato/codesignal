import { expect, test } from 'vitest'
import * as depositProfit from './modules/depositProfit'

test('Deposit profit working case', () => {
  expect(depositProfit.solution(100, 20, 170)).toEqual(3)
})
