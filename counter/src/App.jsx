import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [data, setdata] = useState(0)

  const addValue =()=>{
    setdata(data+1);

  }

  const removeValue =()=>{
    setdata(data-1);

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {data}</h2>
      <button onClick={addValue}>Add Value</button><br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
