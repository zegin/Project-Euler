const Problem = require('./problem')

const description = `
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
`

/* eslint-disable */

const problem4 = new Problem(4, description, () => {
  const isPalindromic = n => {
    const reversed = n.toString().split('').reverse('')
    return n.toString().split('').every((char, i) => char === reversed[i])
  }

  let result = 0

  for (let x = 100; x < 1000; x++) {
    for (let y = 100; y < 1000; y++) {
      let produit = x * y
      if(isPalindromic(produit) && produit > result){
        result = produit
      }
    }
  }

  return result
})

module.exports = problem4