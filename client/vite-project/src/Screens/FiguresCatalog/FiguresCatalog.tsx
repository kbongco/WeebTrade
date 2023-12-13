import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb"
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFigures } from "../../Context/FiguresContext";
import { Figures } from "../../Interfaces/anime-interface";
import './FiguresCatalog.scss';

export default function FiguresCatalog() { 
  const figures: any = useFigures();
  console.log(figures);


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
            <ProductCard key={id} {...figure} />
          ))}
        </div>
        <div className='browse-figures-pagination-container'>

        </div>
      </div>
  </>)
}