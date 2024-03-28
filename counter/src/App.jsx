import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [count, setcount]=useState(0);

   
   function increase(){
    setcount(count+1)

   };
   function decrease(){
    setcount(count-1)

   };

  return (
    <>
    <h1>{count}</h1>
    <button className='btn' onClick={increase}>+</button>
    <button className='btn' onClick={decrease}>-</button>
     
    </>
  )
}

export default App
