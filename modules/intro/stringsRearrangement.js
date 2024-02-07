export const solution = (inputArray) => {
  const options = permute(inputArray)
  for (let i = 0; i < options.length; i++) {
    let valid = true
    for (let j = 0; j < options[i].length - 1 && valid; j++) {
      if (diffsInMoreThanOneChar(options[i][j], options[i][j + 1])) {
        valid = false
      }
    }
    if (valid) {
      return true
    }
  }
  return false
}

function diffsInMoreThanOneChar (stringA, stringB) {
  const charsA = stringA.split('')
  const charsB = stringB.split('')
  let diffs = 0
  for (let i = 0; i < charsA.length; i++) {
    if (charsA[i] !== charsB[i]) {
      if (diffs === 1) {
        return true
      } else {
        diffs = 1
      }
    }
  }
  return diffs === 0
}

function permute (inputArray) {
  const n = inputArray.length
  let result = []
  if (n < 2) {
    result = [...inputArray]
  } else if (n === 2) {
    result = [[inputArray[0], inputArray[1]], [inputArray[1], inputArray[0]]]
  } else {
    for (let j = 0; j < n; j++) {
      const subarray = inputArray.slice(0, j).concat(inputArray.slice(j + 1))
      const subResult = permute(subarray)
      for (let i = 0; i < subResult.length; i++) {
        result.push([inputArray[j], ...subResult[i]])
      }
    }
  }
  return result
}
