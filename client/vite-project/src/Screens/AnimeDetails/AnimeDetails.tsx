import { useParams } from "react-router-dom"
import './AnimeDetails.scss';

export default function AnimeDetails(props) {

  const { title } = useParams();
  const anime = props.anime.find((anime) => anime.Title === title);
  return (
    <>
      <div className='weeb-anime-details'>
        <h1 className='weeb-detail-title'>{title}</h1>
        <div className='weeb-detail-img-container'>
          <img className='weeb-detail-img' src={anime.imgdetail} alt={title} />
        </div>
        <div className='weeb-details-container'>
          <div className='weeb-details-details'>
            <p className='weeb-details-text'>Year: {anime.Year}</p>
            <p className='weeb-details-text'>Genre: {anime.Genre}</p>
            <p className='weeb-details-text'>Description:<br />
              {anime.summary}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}