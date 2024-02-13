import { test, expect } from 'vitest'
import * as lateRide from './modules/theCore/lateRide'

test('Late ride working case', () => {
  expect(lateRide.solution(240)).toEqual(4)
})
