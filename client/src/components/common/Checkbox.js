import React from 'react'
import propTypes from 'prop-types'

function Checkbox({ forName }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={forName}>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          name={forName}
        />
      </label>
    </div>
  )
}

export default Checkbox

Checkbox.propTypes = {
  forName: propTypes.string.isRequired,
}
