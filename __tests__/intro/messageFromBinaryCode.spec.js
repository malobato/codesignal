import { expect, test } from 'vitest'
import * as messageFromBinaryCode from './modules/intro/messageFromBinaryCode'

test('Message from binary code working case', () => {
  expect(messageFromBinaryCode.solution('010010000110010101101100011011000110111100100001')).toEqual('Hello!')
})
