export const solution = (matrix) => {
  const minesweeper = []
  for (let y = 0; y < matrix.length; y++) {
    const row = []
    for (let x = 0; x < matrix[0].length; x++) {
      let mineCounter = 0

      if (y > 0) {
        if (x > 0 && matrix[y - 1][x - 1]) mineCounter++
        if (matrix[y - 1][x]) mineCounter++
        if (x < matrix[0].length - 1 && matrix[y - 1][x + 1]) mineCounter++
      }

      if (x > 0 && matrix[y][x - 1]) mineCounter++
      if (x < matrix[0].length - 1 && matrix[y][x + 1]) mineCounter++

      if (y < matrix.length - 1) {
        if (x > 0 && matrix[y + 1][x - 1]) mineCounter++
        if (matrix[y + 1][x]) mineCounter++
        if (x < matrix[0].length - 1 && matrix[y + 1][x + 1]) mineCounter++
      }
      row.push(mineCounter)
    }
    minesweeper.push(row)
  }
  return minesweeper
}
