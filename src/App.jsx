import './App.css'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='m-2 h-[867px] flex'>
      <Sidebar/>
      <Home />
    </div>
  )
}

export default App
