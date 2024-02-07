import { expect, test } from 'vitest'
import * as isBeautifulString from './modules/intro/isBeautifulString'

test('Is beautiful string working case', () => {
  expect(isBeautifulString.solution('bbbaacdafe')).toEqual(true)
})
