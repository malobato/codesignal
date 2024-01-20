export const solution = (inputString) => {
  const sorted = inputString.split('').sort()
  const counters = []
  let counter = 1
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      counter++
      if (sorted.length === (i + 2)) {
        counters.push({ letter: sorted[i], counter })
      }
    } else {
      counters.push({ letter: sorted[i], counter })
      if (sorted.length === (i + 2)) {
        counters.push({ letter: sorted[i + 1], counter: 1 })
      }
      counter = 1
    }
  }
  for (let i = 0; i < counters.length; i++) {
    if (i < counters.length - 1) {
      if (counters[i].letter.charCodeAt() !== (97 + i) ||
        counters[i + 1].counter > counters[i].counter) {
        return false
      }
    } else {
      if (counters[i].letter.charCodeAt() !== (97 + i)) {
        return false
      }
    }
  }
  return true
}
