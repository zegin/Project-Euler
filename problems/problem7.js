const Problem = require('./Problem')

const description = `
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
`

const problem7 = new Problem(7, description, () => {
  let sum = 0
  for (let a = 1; a < 1000; a++) {
    sum += (a % 3 === 0 || a % 5 === 0) ? a : 0
  }
  return sum
})

module.exports = problem7
