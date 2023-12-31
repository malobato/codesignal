import './style.css'
import * as reverseInParentheses from './modules/reverseInParentheses'
import * as palindromeRearranging from './modules/palindromeRearranging'
import * as isIPv4Address from './modules/isIPv4Address'
import * as avoidObstacles from './modules/avoidObstacles'
import * as boxBlur from './modules/boxBlur'
import * as minesweeper from './modules/minesweeper'
import * as arrayReplace from './modules/arrayReplace'
import * as evenDigitsOnly from './modules/evenDigitsOnly'
import * as variableName from './modules/variableName'
import * as alphabeticShift from './modules/alphabeticShift'

document.querySelector('#app').innerHTML = `
<p>
  reverseInParentheses('(bar)') =
  ${reverseInParentheses.solution('(bar)')}
</p>
<p>
  palindromeRearranging('aabb') =
  ${palindromeRearranging.solution('aabb')}
</p>
<p>
  isIPv4Address('127.0.0.1') =
  ${isIPv4Address.solution('127.0.0.1')}
</p>
<p>
  avoidObstacles([5, 3, 6, 7, 9]) =
  ${avoidObstacles.solution([5, 3, 6, 7, 9])}
</p>
<p>
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
  ]) =
  ${boxBlur.solution([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
  ])}
</p>
<p>
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]) =
  ${minesweeper.solution([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])}
</p>
<p>
  arrayReplace([1, 2, 1], 1, 3)) =
  ${arrayReplace.solution([1, 2, 1], 1, 3)}
</p>
<p>
  evenDigitsOnly(24680) =
  ${evenDigitsOnly.solution(24680)}
</p>
<p>
  variableName('var_1__Int') =
  ${variableName.solution('var_1__Int')}
</p>
<p>
  alphabeticShift('crazy') =
  ${alphabeticShift.solution('crazy')}
</p>
`
