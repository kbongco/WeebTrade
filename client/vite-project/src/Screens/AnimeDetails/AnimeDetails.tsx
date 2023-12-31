import { useParams } from "react-router-dom"
import './AnimeDetails.scss';
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb";
import CurrentFigures from "../../Components/CurrentFigures/CurrentFigures";
import { useFigures } from "../../Context/FiguresContext";
import { Anime } from "../../Interfaces/anime-interface";

export default function AnimeDetails(props) {

  console.log(props);

  const { title } = useParams();
  const anime = props.anime.find((anime:Anime) => anime.Title === title);
  const figureTypes = props.figureTypes;
  const breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Series', path: '/browse/series' },
    { label: title, path: `/anime/${title}` }
  ]
  return (
    <>
      <div className='weeb-anime-details'>
        <BreadCrumbs breadCrumbs={breadcrumbData} />
        <h1 className='weeb-detail-title'>{title}</h1>
        {anime ? (
          <>
            <div className='weeb-detail-img-container'>
              <img className='weeb-detail-img' src={anime.imgdetail} alt={title} />
            </div>
            <div className='weeb-details-container'>
              <div className='weeb-details-details'>
                <p className='weeb-details-text'>Year: {anime.Year}</p>
                <p className='weeb-details-text'>Genre: {anime.Genre}</p>
                <p className='weeb-details-text'>
                  Description:<br />
                  {anime.summary}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p>Anime not found</p>
        )}
      </div>
      <div className='current-figures-header'>
        <h1>Featured Figures</h1>
      </div>
      <div className='current-figures-container-component'>
        <CurrentFigures anime={anime} figureTypes={figureTypes} />
      </div>
    </>
  );
}