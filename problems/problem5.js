const Problem = require('./Problem')

const description = `
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
`
/* eslint-disable no-constant-condition */
const problem5 = new Problem(5, description, () => {
  for (let x = 1; true; x++) {
    let evenlyDivisible = true
    for (let y = 1; y < 20; y++) {
      if (x % y !== 0) {
        evenlyDivisible = false
        break
      }
    }
    if (evenlyDivisible) {
      return x
    }
  }
})

module.exports = problem5
