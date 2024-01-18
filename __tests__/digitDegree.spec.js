import { expect, test } from 'vitest'
import * as digitDegree from './modules/digitDegree'

test('Digit degree working case', () => {
  expect(digitDegree.solution(5)).toEqual(0)
})
