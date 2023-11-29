import { useFigures } from '../../Context/FiguresContext';
import ProductCard from '../ProductCard/ProductCard';
import './CurrentFigures.scss';

export default function CurrentFigures({anime, figureTypes}) {
  const figures: any = useFigures();
  const allFigures = figures.figures;
  const animeFigures = allFigures.filter((figure: any) => figure.Anime === anime?.id)
  console.log(animeFigures);
  const allFigureTypes = animeFigures.map((figure: any) =>
  figureTypes.find((type: any) => type.id === figure.FigureType)
);

  return (
    <>
      <div className='current-figures-container'>
        <div className='all-current-figures-container'>
        {animeFigures.length > 0 ? (
            animeFigures.map((figure: any, id: number) => (
              <ProductCard key={id} {...figure} figureType={allFigureTypes} />
            ))
          ) : (
            <p>Currently no figures available. Check back later!</p>
          )}
        </div>
      </div>
    </>
)
}