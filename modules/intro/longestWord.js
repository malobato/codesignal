export const solution = (text) => {
  return text.match(/[a-zA-Z]+/g).sort((a, b) => b.length - a.length)[0]
}
