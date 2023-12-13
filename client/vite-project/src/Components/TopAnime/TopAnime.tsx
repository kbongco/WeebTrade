import './TopAnime.scss';
import { Anime } from '../../Interfaces/anime-interface';

export default function TopAnime(props: any) {
  console.log(props);

  return ( 
    <>
      <h3 className='top-anime-header'>Top Anime</h3>
      <div className='top-anime-container'>
        {props.topAnime.map((anime:Anime) => (
          <img key={anime.id} className='top-anime-image' src={anime.ImgLink} alt={anime.Title} />
        ))}
      </div>
    </>
  );
}
