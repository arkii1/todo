import React, { useState } from 'react'
import propTypes from 'prop-types'

function Checkbox({ forName, startCompleted = false }) {
  const [value, setValue] = useState(startCompleted || false)

  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={forName}>
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          name={forName}
          checked={value}
          onClick={() => setValue(!value)}
        />
      </label>
    </div>
  )
}

export default Checkbox

Checkbox.propTypes = {
  forName: propTypes.string.isRequired,
  startCompleted: propTypes.bool,
}
