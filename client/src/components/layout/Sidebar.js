/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faListCheck } from '@fortawesome/free-solid-svg-icons'
import logoipsum from '../../assets/svgs/logoipsum.svg'

function Sidebar() {
  return (
    <aside className="flex flex-col justify-content-start p-3 gap-5 bg-gray-200 drop-shadow-xl pt-5 ">
      <span className="flex justify-center align-center ">
        <img className="px-4 h-auto w-40 " src={logoipsum} alt="" />
      </span>
      <Link
        to="/"
        className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300"
      >
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link
        to="/all-tasks"
        className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300"
      >
        <FontAwesomeIcon icon={faListCheck} className="align-baseline" />
        Tasks
      </Link>
    </aside>
  )
}

export default Sidebar
