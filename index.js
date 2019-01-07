// content of index.js
const express = require('express')

const app = express()

const port = 3000
const problems = [
  require('./problem1'),
]

app.set('views', `${__dirname}/views`)
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  console.log(problems)
  res.render('page.js', { list: problems })
})

app.listen(port, () => {
  console.log('Example app listening on port 3000!')
})
