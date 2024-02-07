export const solution = (n) => {
  return n.toString().split('').reduce((acc, value) => acc + parseInt(value), 0)
}
