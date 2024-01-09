import { expect, test } from 'vitest'
import * as absoluteValuesSumMinimization from './modules/absoluteValuesSumMinimization'

test('Absolute values sum minimization working case', () => {
  expect(absoluteValuesSumMinimization.solution([2, 4, 7])).toEqual(4)
})
