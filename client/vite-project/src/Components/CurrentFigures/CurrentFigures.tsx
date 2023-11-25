import ProductCard from '../ProductCard/ProductCard';
import './CurrentFigures.scss';

export default function CurrentFigures() {
  return (
    <>
      <div className='current-figures-container'>
        <h1>Current Figures</h1>
        <div className='all-current-figures-container'>
          <ProductCard/>
        </div>
      </div>
    </>
)
}