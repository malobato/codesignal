import { expect, test } from 'vitest'
import * as addTwoDigits from './modules/theCore/addTwoDigits'

test('Add two digits working case', () => {
  expect(addTwoDigits.solution(29)).toEqual(11)
})
