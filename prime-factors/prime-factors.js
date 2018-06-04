let primeFactors = function () {}

primeFactors.for = function (number) {
  let result = []

  let i = 2
  while (i <= number) {
    if (number % i === 0) {
      result.push(i)
      number /= i
    } else {
      i = nextPrime(i)
    }
  }
  return result
}

let isPrime = function (num) {
  if (num <= 1) return false
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

let nextPrime = function (number) {
  let i = number + 1
  while (!isPrime(i)) i++
  return i
}

module.exports = primeFactors
