const convertPennies = str => {
  let numStr = (Number(str) / 100).toString()
  numStr += '.00'
  return numStr
}

module.default = convertPennies
