import './ProductCard.scss';

export default function ProductCard(props) {
  const { imgLink, FigureName, FigureType } = props;
  console.log(props);
  console.log(props.imgLink);
  return (
    <>
      <div className='product-card'>
        <div className='product-card-img-container'>
          {/* <img className='product-img' src='https://i.ibb.co/1KYn1DJ/Screen-Shot-2023-11-21-at-1-52-26-PM.png'/> */}
          <img className='product-img' src={imgLink}/>
        </div>
        <div className='product-card-text'>
          {/* <p>Anya and Bond Forger Sleepy Time</p> */}
          <p>{FigureName}</p>
          {/* <p>PVC Figure</p> */}
          <p>{FigureType}</p>
          <div className='product-card-details'>
            <a className='product-card-view' href='/'>View details</a>
          </div>
        </div>
      </div>
    </>
  )
}