import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [counter, setcounter] = useState(0)

  var addValue =()=>{
    if(counter<20)
    setcounter(counter+1);

  }

  
  var removeValue =()=>{
    if(counter>0)
    setcounter(counter-1);

  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button><br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
