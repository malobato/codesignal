import { expect, test } from 'vitest'
import * as validTime from './modules/intro/validTime'

test('Valid time working case', () => {
  expect(validTime.solution('13:58')).toEqual(true)
})
