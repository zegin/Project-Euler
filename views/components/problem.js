const React = require('react')
const PropTypes = require('prop-types')

const Problem = props => {
  const { index, description, func, result } = props
  return (
    <div className="row mb-3 mt-1">
      <div className="card">
        <div className="card-header">
          <h2 className="font-weight-light">Problem {index} : </h2>
        </div>
        <div className="card-body">
          <div>
            Description : <em> {description} </em>
          </div>
          <div className="mt-3">
            Exemple:
            <pre>
              <code className="js">
                {`${func}`}
              </code>
            </pre>
          </div>
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
