import { expect, test } from 'vitest'
import * as fileNaming from './modules/intro/fileNaming'

test('File naming working case', () => {
  expect(fileNaming.solution(['doc', 'doc', 'image', 'doc(1)', 'doc']))
    .toEqual(['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'])
  expect(
    fileNaming.solution(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']))
    .toEqual(
      ['a(1)', 'a(6)', 'a', 'a(2)', 'a(3)', 'a(4)', 'a(5)', 'a(7)', 'a(8)', 'a(9)', 'a(10)', 'a(11)']
    )
})
