import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import FigureTypes from './Components/FigureTypes/FigreTypes';
import TopAnime from './Components/TopAnime/TopAnime';


function App() {
  const title = 'WeebTrades';
  const imageSrc = "https://i.ibb.co/ZKp0nfr/Screen-Shot-2023-11-06-at-11-03-13-AM.png";
  const buttonLabels = ['Sign up', 'Browse'];
  const description ="A platform for anime figure enthusiasts to trade and find rare figures!"


  return (
    <>
      <NavBar />
      <Hero title={title} imageSrc={imageSrc} buttonLabels={buttonLabels} description={description} />
      <div className='figure-types'>
      <FigureTypes/>
      </div>
      <div className='top-anime-series'>
        <TopAnime/>
      </div>

    </>
  )
}

export default App
