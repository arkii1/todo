import React from 'react'
import propTypes from 'prop-types'
import uniqid from 'uniqid'

function Table({ headerArr, dataArr }) {
  const headers = headerArr.map((h) => <th key={uniqid()}>{h}</th>)

  const rows = dataArr.map((data) => (
    <tr key={uniqid()}>
      {data.map((d) => (
        <td key={uniqid()}>{d}</td>
      ))}
    </tr>
  ))
  return (
    <div className="overflow-x-auto p-3 w-full">
      <table className="table table-zebra w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default Table

Table.propTypes = {
  headerArr: propTypes.arrayOf(propTypes.string).isRequired,
  dataArr: propTypes.arrayOf(
    propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.object]))
  ).isRequired,
}
