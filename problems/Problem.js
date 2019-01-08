class Problem {
  constructor(index, description, func) {
    this.index = index
    this.description = description
    this.func = func
    this.result = func()
  }
}

module.exports = Problem
