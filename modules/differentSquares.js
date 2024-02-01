export const solution = (matrix) => {
  const rows = matrix.length
  const columns = matrix[0].length
  if (rows === 1 || columns === 1) {
    return 0
  }
  const arrays = []
  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < columns - 1; col++) {
      const current = JSON.stringify([
        matrix[row][col], matrix[row][col + 1],
        matrix[row + 1][col], matrix[row + 1][col + 1]
      ])
      if (!arrays.includes(current)) {
        arrays.push(current)
      }
    }
  }
  return arrays.length
}
