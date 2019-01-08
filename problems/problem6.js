const Problem = require('./Problem')

const description = `
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
`

/* eslint-disable no-constant-condition */
const problem6 = new Problem(6, description, () => {
  const numbers = []

  for (let x = 1; x <= 100; x++) {
    numbers.push(x)
  }

  const sumSquare = numbers.reduce((a, b) => a + b) ** 2
  const squaresSum = numbers.reduce((a, b) => a + b ** 2)

  return (sumSquare - squaresSum)
})

module.exports = problem6
