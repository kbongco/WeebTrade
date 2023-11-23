
import { getAnime } from './../services/anime'
import React,  { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Login from '../Screens/Login/Login';
import { useRoutes } from 'react-router-dom';
import Hero from '../Components/Hero/Hero';
import FigureTypes from '../Components/FigureTypes/FigreTypes';
import TopAnime from '../Components/TopAnime/TopAnime';
import ComingSoon from '../Components/ComingSoon/ComingSoon';
import { getFigureTypes } from '../services/figure-types';
import AnimeDetails from '../Screens/AnimeDetails/AnimeDetails';
import BrowseSeries from '../Screens/BrowseSeries/BrowseSeries';
import { getFigures } from '../services/figures';

export default function MainContainer() {
  const title = 'WeebTrades';
  const imageSrc = "https://i.ibb.co/ZKp0nfr/Screen-Shot-2023-11-06-at-11-03-13-AM.png";
  const buttonLabels = ['Sign up', 'Browse'];
  const description = "A platform for anime figure enthusiasts to trade and find rare figures!"
  const [anime, setAnime] = useState<any>([]);
  const [figureTypes, setFigureTypes] = useState<any>([]);
  const [figures, setFigures] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animeArray = await getAnime();
        setAnime(animeArray);
      } catch (error) {
        setError('Error fetching anime data');
      }

      try {
        const figureTypeArray = await getFigureTypes();
        setFigureTypes(figureTypeArray);
      } catch (error) {
        setError('Error fetching figure types data');
      }
      
      try {
        const figuresArray = await getFigures();
        setFigures(figuresArray);
      } catch (error) {
        setError('Error getting anime data');
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      {
        useRoutes([
          { path: '/login', element: <Login /> },
          {
            index: true,
            element: (
              <>
                <Hero title={title} imageSrc={imageSrc} buttonLabels={buttonLabels} description={description} />
                <div className='figure-types'>
                <FigureTypes figureTypes={figureTypes} />
                </div>
                <div className='top-anime-series'>
                  <TopAnime anime={anime} />
                </div>
                <div className='coming-soon'>
                <ComingSoon />
              </div>
              </>
            )
          },
          { path: '/anime/:title', element: <AnimeDetails anime={anime} /> },
          { path: '/browse/series', element: <BrowseSeries anime={anime} />}
        ])
      }
    </>
  )
}
