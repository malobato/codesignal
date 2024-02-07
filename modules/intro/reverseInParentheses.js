export const solution = (inputString) => {
  return reverseParentheses(inputString)
}

function reverseParentheses (input) {
  while (input.indexOf('(') !== -1) {
    input = reverse(input)
  }
  return input
}

function reverse (input) {
  const lastOpen = input.lastIndexOf('(')
  const nextClose = input.substring(lastOpen + 1).indexOf(')')
  const firstPart = input.substring(0, lastOpen)
  const endPart = input.substring(lastOpen + 1 + nextClose + 1)
  let middlePart = input.substring(lastOpen + 1, lastOpen + 1 + nextClose)
  middlePart = middlePart.split('').reverse().join('')
  return firstPart + middlePart + endPart
}
