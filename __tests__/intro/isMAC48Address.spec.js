import { expect, test } from 'vitest'
import * as isMAC48Address from './modules/intro/isMAC48Address'

test('Is MAC48 address working case', () => {
  expect(isMAC48Address.solution('00-1B-63-84-45-E6')).toEqual(true)
})
