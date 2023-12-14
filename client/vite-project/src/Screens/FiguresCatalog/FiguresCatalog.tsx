import { useState } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb"
import Input from "../../Components/Input/Input";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFigures } from "../../Context/FiguresContext";
import { Figures } from "../../Interfaces/anime-interface";
import getFigureTypesForFigures from "../../utils/getTypesForFigures";
import './FiguresCatalog.scss';
import Pagination from "../../Components/Pagination/Pagination";

export default function FiguresCatalog(props) { 
  const figures: any = useFigures();
  const figureTypes = props.figureTypes;
  const allFigureTypes = getFigureTypesForFigures(figures.figures, figureTypes);
  const [searchItem, setSearchItem] = useState('');
  const totalItems = figures.figures.length;
  console.log(figures.figures.length)
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log(startIndex);
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const setOfFigures = figures.figures.slice(startIndex, endIndex);



  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value);
  }

  const handleSearch = () => {
    console.log('searching:', searchItem)
  }


  const breadcrumbData = [
    { label: 'Home', path: '/' },
    {label: 'Figures', path:'/browse/figures'}
  ]
  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData} />
      <div className='browse-figures-container'>
        <h1 className='browse-figures-text'>Browse Figures</h1>
        <div className='browse-figures-search-input'>
          <Input onChange={handleSearchInputChange} value={searchItem} />
          <button onClick={handleSearch}>Test</button>
        </div>
        <div className='browse-figures-card-container'>
          {setOfFigures.map((figure: Figures, id: number) => (
            <ProductCard key={id} {...figure} figureType={allFigureTypes}/> 
          ))}
        </div>
        <div className='browse-figures-pagination-container'>
          <Pagination
            totalNumber={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            lastPage={Math.ceil(totalItems / itemsPerPage)} />
        </div>
      </div>
  </>)
}