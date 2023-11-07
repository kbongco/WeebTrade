import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import FigureTypes from './Components/FigureTypes/FigreTypes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Hero />
      <div className='figure-types'>
      <FigureTypes/>
      </div>

    </>
  )
}

export default App
