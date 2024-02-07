import { expect, test } from 'vitest'
import * as avoidObstacles from '../../modules/intro/avoidObstacles'

test('Avoid obstacles working test', () => {
  const obstacles = [5, 3, 6, 7, 9]
  const expectedResult = 4
  expect(avoidObstacles.solution(obstacles)).toEqual(expectedResult)
})
