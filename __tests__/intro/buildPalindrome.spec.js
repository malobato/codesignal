import { expect, test } from 'vitest'
import * as buildPalindrome from './modules/intro/buildPalindrome'

test('Build palindrome working case', () => {
  expect(buildPalindrome.solution('abcdc')).toEqual('abcdcba')
})
