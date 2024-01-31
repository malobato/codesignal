import { expect, test } from 'vitest'
import * as sumUpNumbers from './modules/sumUpNumbers'

test('Sum up numbers working case', () => {
  expect(sumUpNumbers.solution('2 apples, 12 oranges')).toEqual(14)
})
