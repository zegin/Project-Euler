// content of index.js
const express = require('express')

const app = express()

const port = 3000

const problem1 = require('./problem1')
const problem2 = require('./problem2')
const problem3 = require('./problem3')
const problem4 = require('./problem4')
const problem5 = require('./problem5')

const problems = [
  problem1,
  problem2,
  problem3,
  problem4,
  problem5,
]

app.set('views', `${__dirname}/views`)
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.render('page.js', { list: problems })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`) //eslint-disable-line
})
