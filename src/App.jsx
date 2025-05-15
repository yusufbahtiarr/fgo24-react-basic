import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => { count > 0 && setCount((count) => count - 1)}}>
          -         
        </button>
        <span> {count} </span>
        <button onClick={() => {count < 10  && setCount((count) => count + 1)}}>
          +         
        </button>
      </div>
    </>
  )
}

export default App
