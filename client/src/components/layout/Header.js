import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Header() {
  const { pathname } = useLocation()
  const [curPath, setCurPath] = useState('/')
  useEffect(() => {
    if (pathname !== curPath) {
      setCurPath(pathname)
    }
  }, [pathname])

  if (curPath === '/')
    return (
      <div className="px-3 pt-3">
        <h1 className="text-2xl	font-medium">Home</h1>
        <div className="divider" />
      </div>
    )

  if (curPath === '/all-tasks') {
    return (
      <div className="px-3 pt-3">
        <h1 className="text-2xl	font-medium	">All Tasks</h1>
        <div className="divider" />
      </div>
    )
  }

  return <div>404</div>
}

export default Header
