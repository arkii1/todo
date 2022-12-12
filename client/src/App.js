import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import PinnedList from './components/common/PinnedList'
import Table from './components/common/Table'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Checkbox from './components/common/Checkbox'
import Modal from './components/common/Modal'
import Details from './components/common/Details'

import { ProjectProvider } from './contexts/ProjectContext'

function App() {
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
                  </div>
                }
              />
              <Route
                path="all-tasks"
                element={
                  <div className="flex flex-col gap-3">
                    <span className="px-3">
                      <Modal
                        title="Create Task"
                        content={
                          <form className="h-max py-4 flex flex-col gap-3">
                            <input
                              name="task-name"
                              type="text"
                              placeholder="Type here"
                              className="input input-bordered w-full "
                            />
                            <textarea
                              className="textarea textarea-bordered h-24"
                              placeholder="Description"
                              name="task-description"
                            />

                            <select className="select select-bordered">
                              <option disabled selected>
                                Project
                              </option>
                              <option>Star Wars</option>
                              <option>Harry Potter</option>
                              <option>Lord of the Rings</option>
                              <option>Planet of the Apes</option>
                              <option>Star Trek</option>
                            </select>

                            <select className="select select-bordered">
                              <option disabled selected>
                                Priority
                              </option>
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Critical</option>
                            </select>

                            <input
                              type="date"
                              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Select a date"
                            />

                            <button type="button" className="btn">
                              Create Task
                            </button>
                          </form>
                        }
                      />
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
                          <Details />,
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
