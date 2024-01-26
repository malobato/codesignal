import { test, expect } from 'vitest'
import * as lineEncoding from './modules/lineEncoding'

test('Line encoding working case', () => {
  expect(lineEncoding.solution('aabbbc')).toEqual('2a3bc')
})
