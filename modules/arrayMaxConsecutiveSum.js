export const solution = (inputArray, k) => {
  if (k === 1) {
    return inputArray.reduce((a, b) => Math.max(a, b))
  }
  let value = 0
  for (let i = 0; i <= (inputArray.length - k); i++) {
    let sum = 0
    for (let t = 0; t < k; t++) {
      sum += inputArray[i + t]
    }
    if (sum > value) {
      value = sum
    }
  }
  return value
}
