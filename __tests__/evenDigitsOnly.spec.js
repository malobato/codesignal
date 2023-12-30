import { test, expect } from 'vitest'
import * as evenDigitsOnly from './modules/evenDigitsOnly'

test('Check that all digits are even', () => {
  expect(evenDigitsOnly.solution(24680)).toEqual(true)
})
