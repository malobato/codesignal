import { expect, test } from 'vitest'
import * as isDigit from './modules/isDigit'

test('Is digit working case', () => {
  expect(isDigit.solution('0')).toEqual(true)
})
