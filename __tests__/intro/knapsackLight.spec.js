import { test, expect } from 'vitest'
import * as knapsackLight from './modules/intro/knapsackLight'

test('Knapsack Light working case', () => {
  expect(knapsackLight.solution(10, 5, 6, 4, 8)).toEqual(10)
})
