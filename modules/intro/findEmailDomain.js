export const solution = (address) => {
  return address.substring(address.lastIndexOf('@') + 1)
}
