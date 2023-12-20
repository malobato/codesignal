import './style.css'
import * as reverseInParentheses from './modules/reverseInParentheses'
import * as palindromeRearranging from './modules/palindromeRearranging'

document.querySelector('#app').innerHTML = `
<p>
  reverseInParentheses('(bar)') =
  ${reverseInParentheses.solution('(bar)')}
</p>
<p>
  palindromeRearranging('aabb') =
  ${palindromeRearranging.solution('aabb')}
</p>
`
