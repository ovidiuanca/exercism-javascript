const primeFactors = {
  for: function (number) {
    let result = []
    let factor = 2
    while (number >= factor) {
      if (number % factor === 0) {
        result = [...result, factor]
        number /= factor
      } else {
        factor += 1
      }
    }
    return result
  }
}

module.exports = primeFactors
