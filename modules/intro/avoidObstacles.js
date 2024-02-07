export const solution = (inputArray) => {
  const maxValue = Math.max(...inputArray)
  for (let position = 1; position < maxValue; position++) {
    const isThereACollision = inputArray.some(x => x % position === 0)
    if (!isThereACollision) {
      return position
    }
  }
  return maxValue + 1
}
