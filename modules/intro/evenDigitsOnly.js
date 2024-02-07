export const solution = (n) => {
  return !n.toString().split('').some(digit => digit % 2 !== 0)
}
