import * as reachNextLevel from './modules/theCore/reachNextLevel'
import { test, expect } from 'vitest'

test('Reach next level working case', () => {
  expect(reachNextLevel.solution(10, 15, 5)).toEqual(true)
})
