export const solution = (image) => {
  const result = []
  for (let y = 1; y < image.length - 1; y++) {
    const row = []
    for (let x = 1; x < image[0].length - 1; x++) {
      const sum =
        Math.floor(
          (image[y - 1][x - 1] + image[y - 1][x] + image[y - 1][x + 1] +
           image[y][x - 1] + image[y][x] + image[y][x + 1] +
           image[y + 1][x - 1] + image[y + 1][x] + image[y + 1][x + 1]) / 9)
      row.push(sum)
    }
    result.push(row)
  }
  return result
}

const image = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0]
]

console.log(solution(image))
