import { expect, test } from 'vitest'
import * as deleteDigit from './modules/deleteDigit'

test('Delete digit working case', () => {
  expect(deleteDigit.solution(152)).toEqual(52)
})
