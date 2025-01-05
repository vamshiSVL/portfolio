import './App.css'
import {useState} from 'react'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar'

function App() {

  const [visible,setvisible] = useState(false)

  const hand = ()=>{
    console.log("hi")
    setvisible(pre=>!pre)
  }

  return (
    <div className='m-2 h-[2500px]'>
      <Sidebar  hand={hand}/>
      <Home visible={visible}/>
    </div>
  )
}

export default App
