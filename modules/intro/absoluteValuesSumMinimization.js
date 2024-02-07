export const solution = (a) => {
  const weights = a.map(e => a.reduce((acc, current) => acc + Math.abs(e - current), 0))
  return a[weights.indexOf(Math.min(...weights))]
}
