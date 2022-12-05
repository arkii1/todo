import React, { useContext, useEffect, useState } from 'react'
import propTypes from 'prop-types'
import {
  createProject,
  updateProject,
  deleteProject,
  getAllProjects,
} from '../api/projectApi'

const ProjectContext = React.createContext()

export function useProject() {
  return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
  const [allProjects, setAllProjects] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const all = await getAllProjects()
      setAllProjects(all)
      setLoading(false)
    })()
  }, [])

  const getProject = (id) => allProjects.find((p) => p._id === id)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    getProject,
    allProjects,
    createProject,
    updateProject,
    deleteProject,
  }

  return (
    <ProjectContext.Provider value={value}>
      {!loading && children}
    </ProjectContext.Provider>
  )
}

ProjectProvider.propTypes = {
  children: propTypes.node.isRequired,
}
