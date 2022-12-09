import React from 'react'

import propTypes from 'prop-types'
import './styles.css'

function PinnedCard({ initials, name, teamColour, link }) {
  return (
    <a
      key={initials}
      href={link}
      className="pinned-card flex rounded-md border-solid border w-1/5 "
    >
      <span className={`project-card--${teamColour} rounded-l-md p-3`}>
        {initials}
      </span>
      <h5 className="rounded-r-md p-3 truncate">{name}</h5>
    </a>
  )
}

export default PinnedCard

PinnedCard.propTypes = {
  initials: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  teamColour: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
}
