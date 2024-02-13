export const solution = (n) => {
  const time = Math.floor(n / 60).toString() + (n % 60).toString()
  return time.split('').reduce((acc, val) => parseInt(acc) + parseInt(val))
}
