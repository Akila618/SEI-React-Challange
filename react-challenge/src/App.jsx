import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataComponent from './components/DataComponent/DataComponent'

function App() {
  return (
    <>
      <div class="container text-center">
      <h1 class="display-1">Display 1</h1>
        <div class="row">
          <div class="col">
            <DataComponent/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
