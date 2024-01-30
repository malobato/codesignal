export const solution = (time) => {
  const [hours, minutes] = time.split(':')
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60
}

const bestSolution = (time) => {
  return /^([0-1]\d|2[0-3]):[0-5]\d$/.test(time)
}
