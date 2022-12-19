import React, { useMemo } from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

function ProjectTableRow({ colour, name, team, lastUpdated, link }) {
  const key = useMemo(() => uniqid(), [])

  const data = (
    <div className="flex items-center justify-start gap-3">
      <span
        className="rounded-full overflow-hidden h-2 w-2"
        // For some reason, `bg-${colour}` isn't working, so can't pass colour as "red" and instead need to specify colour id
        style={{ backgroundColor: colour }}
      />
      <div className="flex justify-start items-baseline gap-1">
        <h4>{name} </h4>
        <small style={{ color: 'rgba(1,1,1,0.4)' }}>in {team}</small>
      </div>
    </div>
  )

  return (
    <tr key={key}>
      <td>
        <Link to={link}>{data}</Link>
      </td>
      <td>{lastUpdated}</td>
    </tr>
  )
}

export default ProjectTableRow

ProjectTableRow.propTypes = {
  colour: propTypes.string.isRequired,
  name: propTypes.node.isRequired,
  team: propTypes.string.isRequired,
  lastUpdated: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
