import { useState } from "react"

function App() {
 
  const [color, setcolor] = useState("lightseagreen")

  return (
    <div className="w-full h-screen duration-900 ease-in-out" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-2 ">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
      
      <button
      onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"red"}}>Red</button>

      <button   onClick={()=>setcolor("green")} 
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"green"}}>Green</button>

      <button   onClick={()=>setcolor("blue")} 
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"blue"}}>Blue</button>

      <button   onClick={()=>setcolor("black")} 
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"black"}}>Black</button>

      <button   onClick={()=>setcolor("lavender")} 
       className="outline-none px-4 py-1 rounded-full text-black shadow-lg text-2xl"
      style={{backgroundColor:"Lavender"}}>Lavender</button>

      <button   onClick={()=>setcolor("lime")}  
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg text-2xl"
      style={{backgroundColor:"lime"}}>Lime</button>

      <button   onClick={()=>setcolor("navy")}  
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"navy"}}>Navy</button>

      <button   onClick={()=>setcolor("yellow")}  
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg text-2xl"
      style={{backgroundColor:"yellow"}}>Yellow</button>

      <button   onClick={()=>setcolor("plum")}  
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"plum"}}>Plum</button>

      <button   onClick={()=>setcolor("cyan")} 
      className="outline-none px-4 py-1 rounded-full text-nlack shadow-lg text-2xl"
      style={{backgroundColor:"cyan"}}>Cyan</button>

      <button   onClick={()=>setcolor("rosybrown")} 
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-2xl"
      style={{backgroundColor:"rosybrown"}}>Rosy Brown</button>
      </div>
      </div>
    </div>
  )
}

export default App
