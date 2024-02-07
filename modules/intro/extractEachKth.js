export const solution = (inputArray, k) => {
  return inputArray.filter((e, i) => (i + 1) % k)
}
