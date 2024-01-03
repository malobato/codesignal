import { test, expect } from 'vitest'
import * as circleOfNumbers from './modules/circleOfNumbers'

test('Circle of numbers working case', () => {
  expect(circleOfNumbers.solution(10, 2)).toEqual(7)
})
