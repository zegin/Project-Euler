const React = require('react')
const PropTypes = require('prop-types')
const Problem = require('./components/problem.js')

const Page = props => {
  const { list } = props
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.13.1/build/styles/default.min.css"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      />
      <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.13.1/build/highlight.min.js" />
      <script>hljs.initHighlightingOnLoad();</script>
      <body>
        <div className="display-3 mb-3">Project Euler</div>
        <div className="container">
          {list.map(el => <Problem key={el.index} {...el} />)}
        </div>
      </body>
    </html>
  )
}

Page.propTypes = {
  list: PropTypes.array.isRequired,
}

module.exports = Page
