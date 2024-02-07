export const solution = (inputString) => {
  const chars = inputString.split('').sort()
  if (chars.length % 2 === 0) {
    for (let i = 0; i < chars.length - 1; i += 2) {
      if (chars[i] !== chars[i + 1]) {
        return false
      }
    }
    return true
  } else {
    let middle = false
    for (let i = 0; i < chars.length - 1;) {
      if (chars[i] !== chars[i + 1]) {
        if (!middle) {
          middle = true
          i++
        } else {
          return false
        }
      } else {
        i += 2
      }
    }
    return true
  }
}
