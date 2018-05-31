const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

let Pangram = function (phrase) {
  this.phrase = phrase
}

Pangram.prototype.isPangram = function () {
  return alphabet.every((char) => this.phrase.toLowerCase().includes(char))
}

module.exports = Pangram
