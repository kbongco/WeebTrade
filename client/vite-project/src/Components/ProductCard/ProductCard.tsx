import { Link } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard(props) {
  const { imgLink, FigureName, FigureType, figureType  } = props;
  // FigureType represents the ID number that corresponds to the figureTypeId\
  console.log(FigureName);

  const mapIdToText = (id: any) => {
    const matchingType = figureType.find((type:any) => type?.id === id);
    return matchingType ? matchingType.FigureType : 'Unknown Type';
  }

  const figureTypeText = mapIdToText(FigureType);
  const figureUrl = `/browse/figures/${encodeURIComponent(FigureName)}`;

  return (
    <>
      <div className='product-card'>
        <div className='product-card-img-container'>
          <img className='product-img' src={imgLink}/>
        </div>
        <div className='product-card-text'>
          <p>{FigureName}</p>
          <p>{figureTypeText}</p>
          <div className='product-card-details'>
            <Link to={figureUrl} className='product-card-view'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}