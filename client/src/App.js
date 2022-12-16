import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import PinnedList from './components/common/PinnedList'
import Table from './components/common/Table'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Modal from './components/common/Modal'
import TaskForm from './components/common/TaskForm'
import TaskTableRow from './components/common/TaskTableRow'

import { ProjectProvider } from './contexts/ProjectContext'

function App() {
  return (
    <div className="App min-h-screen overflow-x-hidden">
      <ProjectProvider>
        <BrowserRouter>
          <Navbar />
          <main className="pt-5 flex flex-col justify-start align-start">
            <Header />
            <Routes>
              <Route
                index
                element={
                  <div className="flex flex-col gap-3">
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
                    {/* <Table
                      headerArr={['Project', 'Last Updated']}
                      dataArr={[
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                      ]}
                    /> */}
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
                    {/* <Table
                      headerArr={['Team', 'Last Updated']}
                      dataArr={[
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                        ['Placeholder', 'Yesterday'],
                      ]}
                    /> */}
                  </div>
                }
              />
              <Route
                path="all-tasks"
                element={
                  <div className="flex flex-col gap-3">
                    <span className="px-3">
                      <Modal title="Create Task" content={<TaskForm />} />
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
                      rows={[
                        <TaskTableRow
                          index={1}
                          id="1"
                          name="Task 1"
                          project="Project 1"
                          description="Test description 1"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          index={2}
                          id="2"
                          name="Task 2"
                          project="Project 2"
                          description="Test description 2"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          index={3}
                          id="3"
                          name="Task 3"
                          project="Project 3"
                          description="Test description 3"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          index={4}
                          id="4"
                          name="Task 4"
                          project="Project 4"
                          description="Test description 4"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          index={5}
                          id="5"
                          name="Task 5"
                          project="Project 5"
                          description="Test description 5"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                      ]}
                    />
                  </div>
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
