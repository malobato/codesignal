export const solution = (cell1, cell2) => {
  return getCellColor(cell1) === getCellColor(cell2)
}

const getCellColor = (cell) => {
  const letters = ['A', 'C', 'E', 'G']
  if (letters.includes(cell[0])) {
    return cell[1] % 2 === 0
  } else {
    return !(cell[1] % 2 === 0)
  }
}
