/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import PinnedList from './components/common/PinnedList'
import Table from './components/common/Table'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Checkbox from './components/common/Checkbox'
import CreateTaskModal from './components/common/CreateTaskModal'

import { ProjectProvider } from './contexts/ProjectContext'

function App() {
  // Context

  return (
    <div className="App min-h-screen">
      <ProjectProvider>
        <BrowserRouter>
          <Navbar />
          <main className="pt-5 flex flex-col justify-start align-start">
            <Header />
            <Routes>
              <Route
                index
                element={
                  <>
                    <PinnedList
                      title="Pinned Projects"
                      dataArr={[
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'yellow',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'purple',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'green',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'pink',
                          link: 'test',
                        },
                      ]}
                    />
                    <Table
                      headerArr={['Project', 'Last Updated']}
                      dataArr={[
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                      ]}
                    />
                    <div className="divider px-3" />
                    <PinnedList
                      title="Pinned Teams"
                      dataArr={[
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'yellow',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'purple',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'green',
                          link: 'test',
                        },
                        {
                          initials: 'TS',
                          name: 'TEST',
                          teamColour: 'pink',
                          link: 'test',
                        },
                      ]}
                    />
                    <Table
                      headerArr={['Team', 'Last Updated']}
                      dataArr={[
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                      ]}
                    />
                  </>
                }
              />
              <Route
                path="all-tasks"
                element={
                  <>
                    <span className="px-3">
                      <CreateTaskModal />
                    </span>
                    <Table
                      headerArr={[
                        'Task',
                        'Project',
                        'Details',
                        'Due',
                        'Priority',
                        'Created',
                        'Completed',
                        'Edit',
                        'Delete',
                      ]}
                      dataArr={[
                        [
                          'Create x',
                          'Project Y',
                          <button className="btn" type="button">
                            Details
                          </button>,
                          'Today',
                          'High',
                          'Today',
                          <Checkbox forName="one" />,
                          <button className="btn" type="button">
                            Edit
                          </button>,
                          <button className="btn" type="button">
                            Delete
                          </button>,
                        ],
                        [
                          'Create A',
                          'Project Y',
                          <button className="btn" type="button">
                            Details
                          </button>,
                          'Today',
                          'High',
                          'Today',
                          <Checkbox forName="two" />,
                          <button className="btn" type="button">
                            Edit
                          </button>,
                          <button className="btn" type="button">
                            Delete
                          </button>,
                        ],
                        [
                          'Create X',
                          'Project y',
                          <button className="btn" type="button">
                            Details
                          </button>,
                          'Today',
                          'High',
                          'Today',
                          <Checkbox forName="three" />,
                          <button className="btn" type="button">
                            Edit
                          </button>,
                          <button className="btn" type="button">
                            Delete
                          </button>,
                        ],
                      ]}
                    />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ProjectProvider>
    </div>
  )
}

export default App
