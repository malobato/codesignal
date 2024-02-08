import { test, expect } from 'vitest'
import * as largestNumber from './modules/theCore/largestNumber'

test('Largest number working case', () => {
  expect(largestNumber.solution(2)).toEqual(99)
})
