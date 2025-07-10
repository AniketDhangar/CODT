import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import Routing from './component/Routing'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
     
     {/* <Dashboard/> */}
     <Routing/>
    </>
  )
}

export default App
