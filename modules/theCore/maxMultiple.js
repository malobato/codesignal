export const solution = (divisor, bound) => {
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i
    }
  }
}

const bestSolution = (divisor, bound) => {
  return bound - (bound % divisor)
}
