
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Foot from './Components/Foot/Foot'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    <Foot/>
      </>
  )
}

export default App
