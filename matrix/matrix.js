let Matrix = function (data) {
  this.rows = data
    .split('\n')
    .map(subarr => subarr.split(' ').map(el => parseInt(el)))

  this.columns = [...Array(this.rows[0].length).keys()]
    .map(index => this.rows.map(arr => arr[index]))
}

module.exports = Matrix
