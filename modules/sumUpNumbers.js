export const solution = (inputString) => {
  return (inputString.match(/\d+/g) || []).reduce((acc, value) => acc + parseInt(value), 0)
}
