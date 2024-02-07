import { test, expect } from 'vitest'
import * as alphabeticShift from './modules/intro/alphabeticShift'

test('Alphabetic shift working case', () => {
  expect(alphabeticShift.solution('crazy')).toEqual('dsbaz')
})
