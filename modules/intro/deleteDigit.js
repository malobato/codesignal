export const solution = (n) => {
  let maxNumber = 0
  const digits = n.toString()

  for (let i = 0; i < digits.length; i++) {
    const current = parseInt(digits.substring(0, i) + digits.substring(i + 1))
    if (current > maxNumber) {
      maxNumber = current
    }
  }
  return maxNumber
}
