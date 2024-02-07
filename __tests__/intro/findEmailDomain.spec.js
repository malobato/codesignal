import { expect, test } from 'vitest'
import * as findEmailDomain from './modules/intro/findEmailDomain'

test('Find Email domain working case', () => {
  expect(findEmailDomain.solution('prettyandsimple@example.com')).toEqual('example.com')
})
