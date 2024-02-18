export const solution = (value1, weight1, value2, weight2, maxW) => {
  if ((weight1 + weight2) <= maxW) {
    return value1 + value2
  }
  if (value1 >= value2) {
    if (weight1 <= maxW) {
      return value1
    } else {
      if (weight2 <= maxW) {
        return value2
      }
    }
  } else {
    if (weight2 <= maxW) {
      return value2
    } else {
      if (weight1 <= maxW) {
        return value1
      }
    }
  }
  return 0
}

const bestSolution = (value1, weight1, value2, weight2, maxW) => {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  )
}
