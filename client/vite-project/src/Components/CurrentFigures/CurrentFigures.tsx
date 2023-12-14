import { useFigures } from '../../Context/FiguresContext';
import { Figures } from '../../Interfaces/anime-interface';
import getFigureTypesForFigures from '../../utils/getTypesForFigures';
import ProductCard from '../ProductCard/ProductCard';
import './CurrentFigures.scss';

export default function CurrentFigures({anime, figureTypes}) {
  const figures: any = useFigures();
  const allFigures = figures.figures;
  const animeFigures = allFigures.filter((figure: Figures) => figure.Anime === anime?.id)
  const allFigureTypes = getFigureTypesForFigures(animeFigures, figureTypes);

  return (
    <>
      <div className='current-figures-container'>
        <div className='all-current-figures-container'>
        {animeFigures.length > 0 ? (
            animeFigures.map((figure: Figures, id: number) => (
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