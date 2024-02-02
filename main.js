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
import * as differentSymbolsNaive from './modules/differentSymbolsNaive'
import * as arrayMaxConsecutiveSum from './modules/arrayMaxConsecutiveSum'
import * as growingPlant from './modules/growingPlant'
import * as knapsackLight from './modules/knapsackLight'
import * as longestDigitsPrefix from './modules/longestDigitsPrefix'
import * as digitDegree from './modules/digitDegree'
import * as bishopAndPawn from './modules/bishopAndPawn'
import * as isBeautifulString from './modules/isBeautifulString'
import * as findEmailDomain from './modules/findEmailDomain'
import * as buildPalindrome from './modules/buildPalindrome'
import * as electionsWinner from './modules/electionsWinner'
import * as isMAC48Address from './modules/isMAC48Address'
import * as isDigit from './modules/isDigit'
import * as lineEncoding from './modules/lineEncoding'
import * as chessKnight from './modules/chessKnight'
import * as deleteDigit from './modules/deleteDigit'
import * as longestWord from './modules/longestWord'
import * as validTime from './modules/validTime'
import * as sumUpNumbers from './modules/sumUpNumbers'
import * as differentSquares from './modules/differentSquares'
import * as digitsProduct from './modules/digitsProduct'

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
<p>
  differentSymbolsNaive("cabca") =
  ${differentSymbolsNaive.solution('cabca')}
</p>
<p>
  arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2) =
  ${arrayMaxConsecutiveSum.solution([2, 3, 5, 1, 6], 2)}
</p>
<p>
  growingPlant(100, 10, 910) =
  ${growingPlant.solution(100, 10, 910)}
</p>
<p>
  knapsackLight(10, 5, 6, 4, 8) =
  ${knapsackLight.solution(10, 5, 6, 4, 8)}
</p>
<p>
  longestDigitsPrefix('123aa1') =
  ${longestDigitsPrefix.solution('123aa1')}
</p>
<p>
  digitDegree(5) =
  ${digitDegree.solution(5)}
</p>
<p>
  bishopAndPawn('a1', 'c3') =
  ${bishopAndPawn.solution('a1', 'c3')}
</p>
<p>
  isBeautifulString('bbbaacdafe') =
  ${isBeautifulString.solution('bbbaacdafe')}
</p>
<p>
findEmailDomain('prettyandsimple@example.com') =
  ${findEmailDomain.solution('prettyandsimple@example.com')}
</p>
<p>
buildPalindrome('abcdc') =
  ${buildPalindrome.solution('abcdc')}
</p>
<p>
electionsWinner([2, 3, 5, 2], 3) =
  ${electionsWinner.solution([2, 3, 5, 2], 3)}
</p>
<p>
isMAC48Address('00-1B-63-84-45-E6') =
  ${isMAC48Address.solution('00-1B-63-84-45-E6')}
</p>
<p>
isDigit('0') =
  ${isDigit.solution('0')}
</p>
<p>
lineEncoding('aabbbc') =
  ${lineEncoding.solution('aabbbc')}
</p>
<p>
chessKnight('a1') =
  ${chessKnight.solution('a1')}
</p>
<p>
deleteDigit(152) =
  ${deleteDigit.solution(152)}
</p>
<p>
longestWord('Ready, steady, go!') =
  ${longestWord.solution('Ready, steady, go!')}
</p>
<p>
validTime('13:58') =
  ${validTime.solution('13:58')}
</p>
<p>
sumUpNumbers('2 apples, 12 oranges') =
  ${sumUpNumbers.solution('2 apples, 12 oranges')}
</p>
<p>
differentSquares([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]]) =
  ${differentSquares.solution([[1, 2, 1], [2, 2, 2], [2, 2, 2], [1, 2, 3], [2, 2, 1]])}
</p>
digitsProduct(12) =
  ${digitsProduct.solution(12)}
</p>
`
