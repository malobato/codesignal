import { test, expect } from 'vitest'
import * as phoneCall from './modules/theCore/phoneCall'

test('Phone call working case', () => {
  expect(phoneCall.solution(3, 1, 2, 20)).toEqual(14)
})
