export const solution = (code) => {
  let message = ''
  for (let i = 0; i < code.length; i += 8) {
    const letter = code.substring(i, i + 8)
    message += String.fromCharCode(parseInt(letter, 2))
  }
  return message
}
