import './style.css'
import * as reverseInParentheses from './modules/reverseInParentheses'
import * as palindromeRearranging from './modules/palindromeRearranging'
import * as isIPv4Address from './modules/isIPv4Address'

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
`
