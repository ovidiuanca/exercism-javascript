let Bob = function () {}

Bob.prototype.hey = function (greeting) {
  greeting = greeting.trim().replace(/[^a-z ?A-Z]/g, '')

  if (greeting === '') {
    return 'Fine. Be that way!'
  } else if (isAskingAndYelling(greeting)) {
    return "Calm down, I know what I'm doing!"
  } else if (isAsking(greeting)) {
    return 'Sure.'
  } else if (isYelling(greeting)) {
    return 'Whoa, chill out!'
  } else {
    return 'Whatever.'
  }
}

let isAskingAndYelling = function (greeting) {
  return isAsking(greeting) && isYelling(greeting)
}

let isAsking = function (greeting) {
  return greeting.endsWith('?')
}

let isYelling = function (greeting) {
  return greeting.toUpperCase() === greeting && greeting.toUpperCase() !== greeting.toLowerCase()
}

module.exports = Bob
