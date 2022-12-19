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
import ProjectTableRow from './components/common/ProjectTableRow'

import { ProjectProvider } from './contexts/ProjectContext'

function App() {
  return (
    <div className="App min-h-screen overflow-x-hidden">
      <ProjectProvider>
        <BrowserRouter>
          <Navbar />
          <main className="py-5 flex flex-col justify-start align-start">
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
                    <Table
                      headerArr={['Projects', 'Last Updated']}
                      rows={[
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 1"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 2"
                          team="Human Resources"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#0ea5e9"
                          name="Project 3"
                          team="Enginnering"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#ec4899"
                          name="Project 4"
                          team="Marketing"
                          lastUpdated="Today"
                          link="test"
                        />,
                        <ProjectTableRow
                          colour="#10b981"
                          name="Project 5"
                          team="Business Development"
                          lastUpdated="Today"
                          link="test"
                        />,
                      ]}
                    />
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
                          id="1"
                          name="Task 1"
                          project="Project 1"
                          description="Test description 1"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          id="2"
                          name="Task 2"
                          project="Project 2"
                          description="Test description 2"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          id="3"
                          name="Task 3"
                          project="Project 3"
                          description="Test description 3"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
                          id="4"
                          name="Task 4"
                          project="Project 4"
                          description="Test description 4"
                          due="2022-11-25"
                          priority="High"
                          createdAt="2022-11-25"
                        />,
                        <TaskTableRow
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
