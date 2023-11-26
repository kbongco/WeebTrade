import { useFigures } from '../../Context/FiguresContext';
import ProductCard from '../ProductCard/ProductCard';
import './CurrentFigures.scss';

export default function CurrentFigures({anime}) {
  const figures:any = useFigures();
  const allFigures = figures.figures;
  const animeFigures = allFigures.filter((figure: any) => figure.Anime === anime?.id)

  return (
    <>
      <div className='current-figures-container'>
        <h1>Current Figures</h1>
        <div className='all-current-figures-container'>
        {animeFigures.map((figure: any, id: number) => (
          <ProductCard key={id} {...figure} />
        ))}
        </div>
      </div>
    </>
)
}