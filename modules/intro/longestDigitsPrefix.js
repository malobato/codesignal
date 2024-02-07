export const solution = (inputString) => {
  const chars = inputString.split('')
  const digits = []
  for (const digit of chars) {
    if (/\d/.test(digit)) {
      digits.push(digit)
    } else {
      return digits.join('')
    }
  }
  return digits.join('')
}

const bestSolution = (inputString) => {
  return inputString.match(/^\d*/)[0]
}
