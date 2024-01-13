import { expect, test } from 'vitest'
import * as differentSymbolsNaive from './modules/differentSymbolsNaive'

test('Different symbols naive working case', () => {
  expect(differentSymbolsNaive.solution('cabca')).toEqual(3)
})
