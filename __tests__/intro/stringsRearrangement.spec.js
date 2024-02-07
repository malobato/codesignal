import { test, expect } from 'vitest'
import * as stringsRearrangement from './modules/intro/stringsRearrangement'

test('Strings rearrangement working case', () => {
  expect(stringsRearrangement.solution(['aba', 'bbb', 'bab'])).toEqual(false)
  expect(stringsRearrangement.solution(['ab', 'bb', 'aa'])).toEqual(true)
})
