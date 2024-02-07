import { expect, test } from 'vitest'
import * as extractEachKth from './modules/intro/extractEachKth'

test('Extract each kth working case', () => {
  expect(extractEachKth.solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
    .toEqual([1, 2, 4, 5, 7, 8, 10])
})
