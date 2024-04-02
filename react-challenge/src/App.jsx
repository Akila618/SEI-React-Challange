import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataComponent from './components/DataComponent/DataComponent'

function App() {
  return (
    <>
      <div className="container text-center">
            <h1 className="display-1">React Uers</h1>
            <div>
              <DataComponent/>
            </div>
      </div>
    </>
  )
}

export default App
