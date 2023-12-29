import { useState } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb"
import Input from "../../Components/Input/Input";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useFigures } from "../../Context/FiguresContext";
import { Figures } from "../../Interfaces/anime-interface";
import getFigureTypesForFigures from "../../utils/getTypesForFigures";
import './FiguresCatalog.scss';
import Pagination from "../../Components/Pagination/Pagination";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FiguresCatalog(props) {
  const figures: any = useFigures();
  const figureTypes = props.figureTypes;
  const allFigureTypes = getFigureTypesForFigures(figures.figures, figureTypes);
  const [searchItem, setSearchItem] = useState('');
  const [searchedFigures, setSearchedFigures] = useState<any>([]);
  const totalItems = figures.figures.length;
  const allFigures = figures.figures;
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const setOfFigures = searchItem.length > 0 ? searchedFigures : allFigures.slice(startIndex, endIndex);



  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value);
  }

  const handleSearch = () => {
    console.log('searching:', searchItem);
  
    if (searchItem.length > 0) {
      const matchingFigures = allFigures.filter((figure) =>
        figure.FigureName.includes(searchItem)
      );
  
      console.log('Matching Figures:', matchingFigures);
      setSearchedFigures(matchingFigures);
      setCurrentPage(1);
    }
  };


  const breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Figures', path: '/browse/figures' }
  ]
  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData} />
      <div className='browse-figures-container'>
        <h1 className='browse-figures-text'>Browse By Figures</h1>
        <div className='browse-figures-search-containers'>
          <div className='browse-figures-search-input'>
            <Input onChange={handleSearchInputChange} value={searchItem} />
          </div>
          <div className='browse-figures-search-figures'>
            <button className='browse-figures-search-button ' onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
            <div className='browse-figures-card-container'>
      {setOfFigures.map((figure: Figures, id: number) => (
        <ProductCard key={id} {...figure} figureType={allFigureTypes} />
      ))}
      {searchItem.length > 0 && searchedFigures.length === 0 && (
        <p>No figures found</p>
      )}
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