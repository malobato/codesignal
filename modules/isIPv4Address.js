const isOnlyNumbers = /^\d+$/
export const solution = (inputString) => {
  const numbers = inputString.split('.')
  if (numbers.length !== 4) {
    return false
  }
  for (let i = 0; i < numbers.length; i++) {
    if (!isOnlyNumbers.test(numbers[i])) {
      return false
    }
    if (numbers[i].length > 1 && numbers[i][0] === '0') {
      return false
    }
    const number = parseInt(numbers[i])
    if (numbers < 0 || number > 255) {
      return false
    }
  }
  return true
}
