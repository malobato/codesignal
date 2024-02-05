export const solution = (n) => {
  const spiral = new Array(n)
  for (let i = 0; i < n; i++) {
    spiral[i] = new Array(n)
  }
  let counter = 1
  let y = 0
  for (let xy = n; xy > 0; xy -= 2) {
    for (let xr = 0; xr < xy; xr++) {
      spiral[y][xr + y] = counter++
    }
    for (let yd = y + 1; yd < xy + y; yd++) {
      spiral[yd][xy - 1 + y] = counter++
    }
    for (let xl = xy - 2 + y; xl >= y; xl--) {
      spiral[xy - 1 + y][xl] = counter++
    }
    for (let yu = xy - 2 + y; yu > y; yu--) {
      spiral[yu][y] = counter++
    }
    y++
  }
  return spiral
}
