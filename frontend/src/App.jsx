import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Job Hunt Buddy AI</h1>
      <div className="main-text">
        <h1>LET'S GET YOUR DREAM JOB</h1>
        <p>Your AI Buddy is here to guide, support, and empower you every step of the way.</p>
      </div>
      
      <button>GET STARTED</button>
    </>
  )
}

export default App
