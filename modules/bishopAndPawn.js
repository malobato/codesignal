export const solution = (bishop, pawn) => {
  const [bx, by] = getPosition(bishop)
  const [px, py] = getPosition(pawn)
  if (bx < px) {
    if (by < py) {
      if ((py - by) === (px - bx)) {
        return true
      }
    } else {
      if ((by - py) === (px - bx)) {
        return true
      }
    }
  } else {
    if (by < py) {
      if ((py - by) === (bx - px)) {
        return true
      }
    } else {
      if ((by - py) === (bx - px)) {
        return true
      }
    }
  }
  return false
}

const getPosition = (piece) => {
  const positions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const position = piece.split('')
  return [positions.indexOf(position[0]) + 1, parseInt(position[1])]
}

const betterSolution = (bishop, pawn) => {
  return Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) === Math.abs(bishop[1] - pawn[1])
}
