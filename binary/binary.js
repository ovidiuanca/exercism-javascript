let Binary = function (number) {
  this.number = number
}

Binary.prototype.toDecimal = function () {
  return /[^0-1]/.test(this.number) ? 0 : parseInt(this.number, 2)
}

module.exports = Binary
