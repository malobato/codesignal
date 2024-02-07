export const solution = (s) => {
  const chars = s.split('')
  const numberOfChars = chars.length
  const encoded = []
  let counter = 1
  for (let i = 0; i < numberOfChars - 1; i++) {
    if (chars[i] === chars[i + 1]) {
      counter++
    } else {
      if (counter === 1) {
        encoded.push(chars[i])
      } else {
        encoded.push(counter.toString())
        encoded.push(chars[i])
      }
      counter = 1
    }
  }
  if (chars[numberOfChars - 1] !== chars[numberOfChars - 2]) {
    encoded.push(chars[numberOfChars - 1])
  } else {
    encoded.push(counter.toString())
    encoded.push(chars[numberOfChars - 1])
  }
  return encoded.join('')
}

const muchBetter = (s) => {
  return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}
