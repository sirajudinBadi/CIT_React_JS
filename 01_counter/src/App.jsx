import { useState } from "react"



function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    if (counter < 20){
      setCounter(counter+1)
    }
  }

  const decreaseValue = () =>{
    if (counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
