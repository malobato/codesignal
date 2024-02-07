import { test, expect } from 'vitest'
import * as arrayReplace from './modules/intro/arrayReplace'

test('Array replace working test', () => {
  expect(arrayReplace.solution([1, 2, 1], 1, 3)).toEqual([3, 2, 3])
  expect(arrayReplace.solution([2, 3], 3, 5)).toEqual([2, 5])
})
