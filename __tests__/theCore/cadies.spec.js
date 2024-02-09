import { test, expect } from 'vitest'
import * as candies from './modules/theCore/candies'

test('Candies working case', () => {
  expect(candies.solution(3, 10)).toEqual(9)
})
