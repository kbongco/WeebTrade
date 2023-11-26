import './ProductCard.scss';

export default function ProductCard(props) {
  const { imgLink, FigureName, FigureType, figureType  } = props;
  console.log(FigureType);
  console.log(figureType)
  // FigureType represents the ID number that corresponds to the figureTypeId\

  const mapIdToText = (id: any) => {
    const matchingType = figureType.find((type:any) => type.id === id);
    return matchingType ? matchingType.FigureType : 'Unknown Type';
  }

  const figureTypeText = mapIdToText(FigureType);

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
            <a className='product-card-view' href='/'>View details</a>
          </div>
        </div>
      </div>
    </>
  )
}