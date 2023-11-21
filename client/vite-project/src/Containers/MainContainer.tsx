import { getAnime } from './../services/anime'
import { useState, useEffect } from 'react';

export default function MainContainer() {
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
      <h1>Container!</h1>
    </>
  )
}
