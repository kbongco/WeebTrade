import Accordion from "../../Components/Accordion/Accordion";
import { useFigures } from "../../Context/FiguresContext";
import Button from "../../Components/Button/Button";
import './FigureDetails.scss';
import Ratings from "../../Components/Ratings/Ratings";
import { useParams } from "react-router-dom";
import SimilarFigures from "../../Components/SimilarFigures/SimilarFigures";

export default function FigureDetails(props) {
  const { FigureName } = useParams();
  const figures: any = useFigures();
  const allFigures = figures.figures;
  const currentFigure = allFigures.find((figure) => figure.FigureName.toLowerCase() === FigureName?.toLowerCase());
  const title = 'Disclaimer';
  const content = 'Weeb trade is not responsible for any lost money or any shenanigans. Please use caution when trading with users to avoid being scammed'
  return (
    <>
      <div className='figure-details-container'>
        <div className='figure-photo-container'>
          <img className='figure-photo' src={currentFigure?.imgLink} />
        </div>
        <div className='figure-info-container'>
                  <div className='figure-details-name'>
            <h1>{FigureName}</h1>
        </div>
          <div className='figure-photo-value-container'>
            <div className='figure-star-container'>
              <Ratings />
            </div>
            <p className='figure-value-text'>{currentFigure?.Price}</p>
          </div>
          <div className='figure-description-container'>
            <p className='description-info'>Description:</p>
            <p className='description-text'>Size: {currentFigure?.size}</p>
            <p className='description-text'>Material: {currentFigure?.material}</p>
            <p className='description-text'>Manufacturer: {currentFigure?.manufacturer}</p>
          </div>
          <div className='figure-accordion-conatiner'>
            <Accordion title={title} content={content} />
          </div>
          <div className='figure-button-container'>
            <Button label={'Make an Offer'} />
          </div>
        </div>
      </div>
      <div className='similar-figures-container'>
        <h2 className='similar-figures-header-details'>Similar Figures</h2>
        <SimilarFigures figures={figures} currentFigure={currentFigure} />
      </div>

    </>
  )
}