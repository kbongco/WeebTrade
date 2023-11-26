import { useFigures } from '../../Context/FiguresContext';
import ProductCard from '../ProductCard/ProductCard';
import './CurrentFigures.scss';

export default function CurrentFigures({anime, figureTypes}) {
  const figures: any = useFigures();
  const allFigures = figures.figures;
  const animeFigures = allFigures.filter((figure: any) => figure.Anime === anime?.id)
  const allFigureTypes = animeFigures.map((figure: any) =>
  figureTypes.find((type: any) => type.id === figure.FigureType)
);

  return (
    <>
      <div className='current-figures-container'>
        <h1>Current Figures</h1>
        <div className='all-current-figures-container'>
        {animeFigures.map((figure: any, id: number) => (
          <ProductCard key={id} {...figure} figureType={allFigureTypes}/>
        ))}
        </div>
      </div>
    </>
)
}