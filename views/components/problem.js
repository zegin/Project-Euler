const React = require('react')
const PropTypes = require('prop-types')

const Problem = props => {
  const { index, description, func, result } = props
  return (
    <div className="row">
      <div className="card">
        <div className="card-body">Problem
          {index} : <em> {description} </em>
          <pre>
            <code className="js">
              {`${func}`}
            </code>
          </pre>
          <strong>Result : {result} </strong>
        </div>
      </div>
    </div>
  )
}

Problem.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  result: PropTypes.any,
}

module.exports = Problem
