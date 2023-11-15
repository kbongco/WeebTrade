import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import TopAnime from './Components/TopAnime/TopAnime';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login/Login';
import FigureTypes from './Components/FigureTypes/FigreTypes';

function App() {
  const title = 'WeebTrades';
  const imageSrc = "https://i.ibb.co/ZKp0nfr/Screen-Shot-2023-11-06-at-11-03-13-AM.png";
  const buttonLabels = ['Sign up', 'Browse'];
  const description = "A platform for anime figure enthusiasts to trade and find rare figures!"

  return (
      <>
      <NavBar />
      <Routes>
        <Hero title={title} imageSrc={imageSrc} buttonLabels={buttonLabels} description={description} />
        <div className='figure-types'>
          <FigureTypes/>
        </div>
        <div className='top-anime-series'>
          <TopAnime />
        </div>
        <div className='coming-soon'>
          <ComingSoon />
        </div>
      </Routes>

        <Routes>
          <Route path='/login' element={<Login />}  exact/>
        </Routes>
      </>
  );
}

export default App;
