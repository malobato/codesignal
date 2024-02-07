import './style.css'
import * as reverseInParentheses from './modules/intro/reverseInParentheses'
import * as palindromeRearranging from './modules/intro/palindromeRearranging'
import * as isIPv4Address from './modules/intro/isIPv4Address'
import * as avoidObstacles from './modules/intro/avoidObstacles'
import * as boxBlur from './modules/intro/boxBlur'
import * as minesweeper from './modules/intro/minesweeper'
import * as arrayReplace from './modules/intro/arrayReplace'
import * as evenDigitsOnly from './modules/intro/evenDigitsOnly'
import * as variableName from './modules/intro/variableName'
import * as alphabeticShift from './modules/intro/alphabeticShift'
import * as chessBoardCellColor from './modules/intro/chessBoardCellColor'
import * as circleOfNumbers from './modules/intro/circleOfNumbers'
import * as depositProfit from './modules/intro/depositProfit'
import * as absoluteValuesSumMinimization from './modules/intro/absoluteValuesSumMinimization'
import * as stringsRearrangement from './modules/intro/stringsRearrangement'
import * as extractEachKth from './modules/intro/extractEachKth'
import * as firstDigit from './modules/intro/firstDigit'
import * as differentSymbolsNaive from './modules/intro/differentSymbolsNaive'
import * as arrayMaxConsecutiveSum from './modules/intro/arrayMaxConsecutiveSum'
import * as growingPlant from './modules/intro/growingPlant'
import * as knapsackLight from './modules/intro/knapsackLight'
import * as longestDigitsPrefix from './modules/intro/longestDigitsPrefix'
import * as digitDegree from './modules/intro/digitDegree'
import * as bishopAndPawn from './modules/intro/bishopAndPawn'
import * as isBeautifulString from './modules/intro/isBeautifulString'
import * as findEmailDomain from './modules/intro/findEmailDomain'
import * as buildPalindrome from './modules/intro/buildPalindrome'
import * as electionsWinner from './modules/intro/electionsWinner'
import * as isMAC48Address from './modules/intro/isMAC48Address'
import * as isDigit from './modules/intro/isDigit'
import * as lineEncoding from './modules/intro/lineEncoding'
import * as chessKnight from './modules/intro/chessKnight'
import * as deleteDigit from './modules/intro/deleteDigit'
import * as longestWord from './modules/intro/longestWord'
import * as validTime from './modules/intro/validTime'
import * as sumUpNumbers from './modules/intro/sumUpNumbers'
import * as differentSquares from './modules/intro/differentSquares'
import * as digitsProduct from './modules/intro/digitsProduct'
import * as fileNaming from './modules/intro/fileNaming'
import * as messageFromBinaryCode from './modules/intro/messageFromBinaryCode'
import * as spiralNumbers from './modules/intro/spiralNumbers'
import * as sudoku from './modules/intro/sudoku'

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
<p>
digitsProduct(12) =
  ${digitsProduct.solution(12)}
</p>
<p>
fileNaming(['doc', 'doc', 'image', 'doc(1)', 'doc']) =
  ${fileNaming.solution(['doc', 'doc', 'image', 'doc(1)', 'doc'])}
</p>
<p>
messageFromBinaryCode('010010000110010101101100011011000110111100100001') =
  ${messageFromBinaryCode.solution('010010000110010101101100011011000110111100100001')}
</p>
<p>
spiralNumbers(3) =
  ${spiralNumbers.solution(3)}
</p>
<p>
sudoku([
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]) =
  ${sudoku.solution([
    [1, 3, 2, 5, 4, 6, 9, 8, 7],
    [4, 6, 5, 8, 7, 9, 3, 2, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
  ])}
</p>
`
