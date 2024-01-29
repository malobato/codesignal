import { expect, test } from 'vitest'
import * as longestWord from './modules/longestWord'

test('Longest word working case', () => {
  expect(longestWord.solution('Ready, steady, go!')).toEqual('steady')
})
