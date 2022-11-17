import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './components/layout/Sidebar'
import PinnedList from './components/common/PinnedList'
import Table from './components/common/Table'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App min-h-screen">
      <Sidebar />
      <main>
        <BrowserRouter>
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
                  <div className="divider px-5" />
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
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  )
}

export default App
