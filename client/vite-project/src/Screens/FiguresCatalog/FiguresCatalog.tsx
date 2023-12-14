import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb"
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFigures } from "../../Context/FiguresContext";
import { Figures } from "../../Interfaces/anime-interface";
import getFigureTypesForFigures from "../../utils/getTypesForFigures";
import './FiguresCatalog.scss';

export default function FiguresCatalog(props) { 
  const figures: any = useFigures();
  const figureTypes = props.figureTypes;
  const allFigureTypes = getFigureTypesForFigures(figures.figures, figureTypes);


  const breadcrumbData = [
    { label: 'Home', path: '/' },
    {label: 'Figures', path:'/browse/figures'}
  ]
  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData} />
      <div className='browse-figures-container'>
        <h1 className='browse-figures-text'>Browse Figures</h1>
        <div className='browse-figures-card-container'>
          {figures.figures.map((figure: Figures, id: number) => (
            <ProductCard key={id} {...figure} figureType={allFigureTypes} />
          ))}
        </div>
        <div className='browse-figures-pagination-container'>

        </div>
      </div>
  </>)
}