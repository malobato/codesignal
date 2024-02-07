import { expect, test } from 'vitest'
import * as arrayMaxConsecutiveSum from './modules/intro/arrayMaxConsecutiveSum'

test('Array max consecutive sum working case', () => {
  expect(arrayMaxConsecutiveSum.solution([2, 3, 5, 1, 6], 2)).toEqual(8)
})
