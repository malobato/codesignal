export const solution = (grid) => {
  for (let y = 0; y < 9; y++) {
    const rows = new Set()
    const columns = new Set()
    for (let x = 0; x < 9; x++) {
      rows.add(grid[y][x])
      columns.add(grid[x][y])
    }
    if (rows.size !== 9 || columns.size !== 9) {
      return false
    }
  }
  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      const numbers = new Set()
      for (let yy = 0; yy < 3; yy++) {
        for (let xx = 0; xx < 3; xx++) {
          numbers.add(grid[y + yy][x + xx])
        }
      }
      if (numbers.size !== 9) {
        return false
      }
    }
  }
  return true
}
