export const solution = (upSpeed, downSpeed, desiredHeight) => {
  let grown = 0
  let days = 0
  do {
    days++
    grown += upSpeed
    if (grown >= desiredHeight) {
      return days
    }
    grown -= downSpeed
  } while (grown <= desiredHeight)

  return days
}
