const glob = require('glob')
const path = require('path')
// content of index.js
const express = require('express')

const app = express()

const port = 3000

const problems = []

glob.sync('./problems/problem+([0-9]).js').forEach((file) => {
  problems.push(require(path.resolve(file))) //eslint-disable-line
})

app.set('views', `${__dirname}/views`)
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.render('page.js', { list: problems })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`) //eslint-disable-line
})
