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
import * as chessBoardCellColor from './modules/chessBoardCellColor'
import * as circleOfNumbers from './modules/circleOfNumbers'
import * as depositProfit from './modules/depositProfit'
import * as absoluteValuesSumMinimization from './modules/absoluteValuesSumMinimization'
import * as stringsRearrangement from './modules/stringsRearrangement'
import * as extractEachKth from './modules/extractEachKth'
import * as firstDigit from './modules/firstDigit'

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
<p>
  chessBoardCellColor('A1', 'C3') =
  ${chessBoardCellColor.solution('A1', 'C3')}
</p>
<p>
  circleOfNumbers(10, 2) =
  ${circleOfNumbers.solution(10, 2)}
</p>
<p>
  depositProfit(100, 20, 170) =
  ${depositProfit.solution(100, 20, 170)}
</p>
<p>
  absoluteValuesSumMinimization([2, 4, 7]) =
  ${absoluteValuesSumMinimization.solution([2, 4, 7])}
</p>
<p>
  stringsRearrangement(["aba", "bbb", "bab"]) =
  ${stringsRearrangement.solution(['aba', 'bbb', 'bab'])}
</p>
<p>
  extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3) =
  ${extractEachKth.solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)}
</p>
<p>
  firstDigit("var_1__Int") =
  ${firstDigit.solution('var_1__Int')}
</p>
`
