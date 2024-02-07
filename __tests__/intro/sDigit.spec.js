import { expect, test } from 'vitest'
import * as isDigit from './modules/intro/isDigit'

test('Is digit working case', () => {
  expect(isDigit.solution('0')).toEqual(true)
})
