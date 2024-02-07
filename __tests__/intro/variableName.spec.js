import { test, expect } from 'vitest'
import * as variableName from './modules/intro/variableName'

test('Variable name is correct', () => {
  expect(variableName.solution('var_1__Int')).toEqual(true)
})
