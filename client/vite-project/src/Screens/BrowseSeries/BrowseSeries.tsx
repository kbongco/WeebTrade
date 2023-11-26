import './BrowseSeries.scss';
import { Link } from 'react-router-dom';

export default function BrowseSeries(props) {
  return ( 
    <>
<div className="weeb-browse-anime-container">
        <h1>Browse by Series</h1>
        {/* Very basic implementation so I can get the details page up and running */}
  <div className='weeb-browse-anime-titles'>
    {props.anime.map((anime:any) => (
      <div className='weeb-titles' key={anime.id}>
        <Link key={anime.id} to={`/anime/${encodeURIComponent(anime.Title)}`}>
          <p>{anime.Title}</p>
        </Link>
      </div>
    ))}
  </div>
</div>
    </>
  )
}