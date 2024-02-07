import { expect, test } from 'vitest'
import * as growingPlant from './modules/intro/growingPlant'

test('Growing plant working case', () => {
  expect(growingPlant.solution(100, 10, 910)).toEqual(10)
})
