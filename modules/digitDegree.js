export const solution = (n) => {
  if (n < 10) {
    return 0
  }
  return sumDigits(n, 0)[1]
}

function sumDigits (n, times) {
  times++
  let total = n.toString().split('').reduce((sum, value) => sum + parseInt(value), 0)
  if (total > 9) {
    [total, times] = sumDigits(total, times)
  }
  return [total, times]
}
