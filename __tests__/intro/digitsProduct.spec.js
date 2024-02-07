import { expect, test } from 'vitest'
import * as digitsProduct from './modules/intro/digitsProduct'

test('Digits product working case', () => {
  expect(digitsProduct.solution(12)).toEqual(26)
})
