import React, { useMemo } from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

function ProjectTableRow({ index, name, lastUpdated, link }) {
  const key = useMemo(() => uniqid(), [])

  return (
    <tr key={key}>
      <td>{index}</td>
      <td>
        <Link to={link}>{name}</Link>
      </td>
      <td>{lastUpdated}</td>
    </tr>
  )
}

export default ProjectTableRow

ProjectTableRow.propTypes = {
  index: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  lastUpdated: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
