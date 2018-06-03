const secondsInDay = 86400

let SpaceAge = function (seconds) {
  this.seconds = seconds

  this.yearsForOrbitalTime = function (daysPerOrbitalTime) {
    return parseFloat((this.seconds / (secondsInDay * daysPerOrbitalTime)).toFixed(2))
  }
}

SpaceAge.prototype.onMercury = function () {
  return this.yearsForOrbitalTime(87.97)
}

SpaceAge.prototype.onVenus = function () {
  return this.yearsForOrbitalTime(224.6)
}

SpaceAge.prototype.onEarth = function () {
  return this.yearsForOrbitalTime(365.25)
}

SpaceAge.prototype.onMars = function () {
  return this.yearsForOrbitalTime(687)
}

SpaceAge.prototype.onJupiter = function () {
  return this.yearsForOrbitalTime(4330)
}

SpaceAge.prototype.onSaturn = function () {
  return this.yearsForOrbitalTime(10750)
}

SpaceAge.prototype.onUranus = function () {
  return this.yearsForOrbitalTime(30700)
}

SpaceAge.prototype.onNeptune = function () {
  return this.yearsForOrbitalTime(60200)
}

module.exports = SpaceAge
