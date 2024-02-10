import { test, expect } from 'vitest'
import * as seatsInTheater from './modules/'

test('Seats in theater working case', () => {
  expect(seatsInTheater.solution(16, 11, 5, 3)).toEqual(96)
})
