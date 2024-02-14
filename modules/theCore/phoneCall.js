export const solution = (min1, min2_10, min11, s) => {
  let time = 0
  let credit = s
  if (s < min1) {
    return 0
  }
  credit -= min1
  time++
  if (credit < min2_10) {
    return time
  }
  let minutes = 9
  do {
    minutes--
    time++
    credit -= min2_10
  } while (credit > min2_10 && minutes > 0)
  if (credit < min11 || minutes > 0) {
    return time
  }
  time += Math.floor(credit / min11)
  return time
}
