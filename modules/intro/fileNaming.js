export const solution = (names) => {
  const solutionNames = [...names]
  let counter = 1
  for (let i = 0; i <= solutionNames.length; i++) {
    const setNames = solutionNames.slice(0, i)
    const name = solutionNames[i]
    while (setNames.includes(solutionNames[i])) {
      solutionNames[i] = name + '(' + counter.toString() + ')'
      counter++
    }
    counter = 1
  }
  return solutionNames
}
