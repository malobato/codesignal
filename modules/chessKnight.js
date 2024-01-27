export const solution = (cell) => {
  const position = getPosition(cell)
  let movements = 0
  if (position[0] > 2) {
    if (position[1] > 1) {
      movements++
    }
    if (position[1] < 8) {
      movements++
    }
  }
  if (position[0] < 7) {
    if (position[1] > 1) {
      movements++
    }
    if (position[1] < 8) {
      movements++
    }
  }
  if (position[1] > 2) {
    if (position[0] > 1) {
      movements++
    }
    if (position[0] < 8) {
      movements++
    }
  }
  if (position[1] < 7) {
    if (position[0] > 1) {
      movements++
    }
    if (position[0] < 8) {
      movements++
    }
  }

  return movements
}

const getPosition = (piece) => {
  const position = piece.split('')
  return [position[0].charCodeAt() - 96, parseInt(position[1])]
}
