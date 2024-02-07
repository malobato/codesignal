import { expect, test } from 'vitest'
import * as longestDigitsPrefix from './modules/intro/longestDigitsPrefix'

test('Longest digits prefix working case', () => {
  expect(longestDigitsPrefix.solution('123aa1')).toEqual('123')
})
