export const solution = (product) => {
  for (let i = 1; i <= 9999; i++) {
    const c = i.toString().split('').reduce((acc, value) => acc * Number(value), 1)
    if (c === product) {
      return i
    }
  }
  return -1
}
