export const solution = (st) => {
  const pal = st.split('')
  const palindrome = []
  let sol = [...pal]
  for (let i = 0; i < pal.length && !isPalindrome(sol); i++) {
    palindrome.push(pal[i])
    sol = [...pal, [...palindrome].reverse().join('')].join('')
  }
  return sol
}

const isPalindrome = (str) => {
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false
      }
    }
  } else {
    for (let i = 0; i < (str.length - 1) / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false
      }
    }
  }
  return true
}
