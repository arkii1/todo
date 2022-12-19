import React from 'react'
import propTypes from 'prop-types'
import PinnedCard from './PinnedCard'

import './styles.css'

function PinnedList({ title, dataArr }) {
  return (
    <div className="pinned-list flex flex-col justify-around px-3 pt-0 pb-3 gap-2">
      <h3 className="text-lg font-normal text-gray-500	">{title}</h3>
      <div className="flex justify-between">
        {dataArr.map((data) => (
          <PinnedCard
            initials={data.initials}
            name={data.name}
            teamColour={data.teamColour}
            link={data.link}
          />
        ))}
      </div>
    </div>
  )
}

export default PinnedList

PinnedList.propTypes = {
  title: propTypes.string.isRequired,
  dataArr: propTypes.arrayOf(propTypes.shape).isRequired,
}
