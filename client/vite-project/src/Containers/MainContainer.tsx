import { getAnime } from './../services/anime'
import { useState, useEffect } from 'react';
import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Login from '../Screens/Login/Login';
import { useRoutes } from 'react-router-dom';
import Hero from '../Components/Hero/Hero';
import FigureTypes from '../Components/FigureTypes/FigreTypes';
import TopAnime from '../Components/TopAnime/TopAnime';
import ComingSoon from '../Components/ComingSoon/ComingSoon';

export default function MainContainer() {
  const title = 'WeebTrades';
  const imageSrc = "https://i.ibb.co/ZKp0nfr/Screen-Shot-2023-11-06-at-11-03-13-AM.png";
  const buttonLabels = ['Sign up', 'Browse'];
  const description = "A platform for anime figure enthusiasts to trade and find rare figures!"
  const [anime, setAnime] = useState<any>([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const animeArray = await getAnime();
      setAnime(animeArray);
    }
    fetchAnime();
  }, []);
  return (
    <>
      <NavBar />
      <h1>Container!!</h1>
      {
        useRoutes([
          { path: '/login', element: <Login /> },
          {
            index: true,
            element: (
              <>
                <Hero title={title} imageSrc={imageSrc} buttonLabels={buttonLabels} description={description} />
                <div className='figure-types'>
                <FigureTypes />
                </div>
                <div className='top-anime-series'>
                <TopAnime />
                </div>
                <div className='coming-soon'>
                <ComingSoon />
              </div>
              </>
            )
          }
        ])
      }
    </>
  )
}
