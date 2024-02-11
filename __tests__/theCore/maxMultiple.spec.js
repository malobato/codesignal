import { test, expect } from 'vitest'
import * as maxMultiple from './modules/theCore/maxMultiple'

test('Max multiple working case', () => {
  expect(maxMultiple.solution(3, 10)).toEqual(9)
})
