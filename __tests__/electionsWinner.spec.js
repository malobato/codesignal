import { expect, test } from 'vitest'
import * as electionsWinner from './modules/electionsWinner'

test('Elections winner working case', () => {
  expect(electionsWinner.solution([2, 3, 5, 2], 3)).toEqual(2)
})
