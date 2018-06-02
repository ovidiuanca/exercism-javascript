let Gigasecond = function (moment) {
  this.moment = moment
}

Gigasecond.prototype.date = function () {
  return new Date(this.moment.getTime() + 1000000000000)
}

module.exports = Gigasecond
