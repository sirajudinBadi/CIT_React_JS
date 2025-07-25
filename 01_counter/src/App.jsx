import { useState } from "react"



function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 5

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br />
      <button>Decrease Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
