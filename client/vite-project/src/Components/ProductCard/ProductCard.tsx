import { Link } from 'react-router-dom';
import './ProductCard.scss';
import FigureTypesInterface from '../../Interfaces/figure-type-interface';
import ProductCardComponent from '../../Interfaces/component-interface';

export default function ProductCard(props) {
  const { imgLink, FigureName, FigureType, figureType  } = props;
  // FigureType represents the ID number that corresponds to the figureTypeId\

  const mapIdToText = (id: number) => {
    const matchingType = figureType?.find((type:FigureTypesInterface) => type?.id === id);
    return matchingType ? matchingType?.FigureType : '';
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
          {/* <p>{figureTypeText}</p> */}
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