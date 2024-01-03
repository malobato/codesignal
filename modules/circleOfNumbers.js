export const solution = (n, firstNumber) => {
  const position = Math.floor(n / 2) + firstNumber
  return (position < n) ? position : (position % n)
}
