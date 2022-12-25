import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div className=" target targetReverse"></div>
        <div className="target targetFront"></div>
      </header>

      <main></main>
    </div>
  )
}

export default App
