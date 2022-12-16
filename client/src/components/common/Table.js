import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

function Table({ headerArr, rows }) {
  const headers = headerArr.map((h) => <th key={uniqid()}>{h}</th>)

  return (
    <div className="overflow-x-auto w-full px-3">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th />
            {headers}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default Table

Table.propTypes = {
  headerArr: propTypes.arrayOf(propTypes.string).isRequired,
  rows: propTypes.arrayOf(propTypes.node).isRequired,
}
