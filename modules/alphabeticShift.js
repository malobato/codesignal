export const solution = (inputString) => {
  return String.fromCharCode(
    ...inputString.split('').map((character) => {
      return character.charCodeAt() === 122 ? 97 : character.charCodeAt() + 1
    })
  )
}
