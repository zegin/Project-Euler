const Problem = require('./Problem')

const description = `
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
`

/* eslint-disable no-restricted-globals */

const problem3 = new Problem(3, description, () => {
  const isPrime = n => {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
      return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  const number = 600851475143

  const prime = []
  for (let i = 1; i < Math.sqrt(number); i++) {
    if (isPrime(i) && number % i === 0) {
      prime.push(i)
    }
  }

  return Math.max(...prime)
})

module.exports = problem3
