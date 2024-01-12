import { expect, test } from 'vitest'
import * as firstDigit from './modules/firstDigit'

test('First digit working case', () => {
  expect(firstDigit.solution('var_1__Int')).toEqual('1')
})
