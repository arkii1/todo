import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faListCheck,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import logoipsum from '../../assets/svgs/logoipsum.svg'

import useWindowSize from '../../hooks/useWindowSize'
import './styles.css'
import useOutsideCallback from '../../hooks/useOutsideCallback'

function Navbar({ projects = [] }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const mobileNavRef = useRef()
  const [width] = useWindowSize()

  const handleShowMobileMenu = () => setShowMobileMenu(true)
  const handleHideMobileMenu = () => setShowMobileMenu(false)

  useOutsideCallback(mobileNavRef, handleHideMobileMenu)

  return width > 1000 ? (
    <nav className="flex flex-col justify-content-start p-3 gap-5 bg-gray-200 drop-shadow-xl pt-5 ">
      <span className="flex justify-center align-center ">
        <img className="px-4 h-auto w-40 " src={logoipsum} alt="" />
      </span>
      <Link
        to="/"
        className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300"
      >
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link
        to="/all-tasks"
        className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300"
      >
        <FontAwesomeIcon icon={faListCheck} className="align-baseline" />
        Tasks
      </Link>
      {projects.map((project) => (
        <Link
          className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300 gap-3"
          to={project.slug}
        >
          <span
            className="rounded-full overflow-hidden h-2 w-2"
            // For some reason, `bg-${colour}` isn't working, so can't pass colour as "red" and instead need to specify colour id
            style={{ backgroundColor: 'blue' }}
          />
          <h4>{project.name} </h4>
        </Link>
      ))}
    </nav>
  ) : (
    <>
      <span className="w-100 p-5 flex justify-start">
        <FontAwesomeIcon icon={faBars} onClick={handleShowMobileMenu} />
      </span>
      <nav
        className={`navbar${
          showMobileMenu ? '' : '--hide'
        } flex flex-col justify-start p-3 gap-5 bg-gray-200 drop-shadow-xl pt-5 absolute`}
        ref={mobileNavRef}
      >
        <span className="min-w-full	flex justify-between items-center px-2">
          <img className="h-auto " src={logoipsum} alt="" />
          <FontAwesomeIcon icon={faXmark} onClick={handleHideMobileMenu} />
        </span>
        <Link
          to="/"
          className="min-w-full	p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300"
          onClick={handleHideMobileMenu}
        >
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <Link
          to="/all-tasks"
          className="min-w-full	p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300"
          onClick={handleHideMobileMenu}
        >
          <FontAwesomeIcon icon={faListCheck} className="align-baseline" />
          Tasks
        </Link>
        {projects.map((project) => (
          <Link
            className="p-3 rounded flex justify-start items-center gap-5 hover:bg-gray-300 focus:bg-gray-300 gap-3"
            to={project.slug}
          >
            <span
              className="rounded-full overflow-hidden h-2 w-2"
              // For some reason, `bg-${colour}` isn't working, so can't pass colour as "red" and instead need to specify colour id
              style={{ backgroundColor: 'blue' }}
            />
            <h4>{project.name} </h4>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Navbar

Navbar.propTypes = {
  projects: propTypes.arrayOf(
    propTypes.objectOf({
      name: propTypes.string.isRequired,
      slug: propTypes.string.isRequired,
      description: propTypes.string,
      image: propTypes.string,
      created: propTypes.string.isRequired,
      lastUpdated: propTypes.string.isRequired,
      createdUser: propTypes.shape,
      contributors: propTypes.arrayOf(propTypes.shape),
    })
  ),
}
