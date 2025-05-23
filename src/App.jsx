import './App.css'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='m-2 min-h-screen'>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App;