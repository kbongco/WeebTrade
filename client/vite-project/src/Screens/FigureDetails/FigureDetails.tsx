import Accordion from "../../Components/Accordion/Accordion";
import { useFigures } from "../../Context/FiguresContext";
import Button from "../../Components/Button/Button";
import './FigureDetails.scss';
import Ratings from "../../Components/Ratings/Ratings";

export default function FigureDetails(props) {
  const figures = useFigures();
  const title = 'Disclaimer';
  const content = 'Weeb trade is not responsible for any lost money or any shenanigans. Please use caution when trading with users to avoid being scammed'
  return (
    <>
      <div className='figure-details-container'>
        <div className='figure-photo-container'>
          <img className='figure-photo' src='https://i.ibb.co/hZtfZKY/Screen-Shot-2023-11-21-at-1-53-11-PM.png' />
        </div>
        <div className='figure-info-container'>
                  <div className='figure-details-name'>
          <h1>Loid Forger Party Ver</h1>
        </div>
          <div className='figure-photo-value-container'>
            <div className='figure-star-container'>
              <Ratings />
            </div>
            <p className='figure-value-text'>$$</p>
          </div>
          <div className='figure-description-container'>
            <p className='description-info'>Description:</p>
            <p>Size: 7.8in</p>
            <p>Material: PVC</p>
            <p>Manufacturer: Sega</p>
          </div>
          <div className='figure-accordion-conatiner'>
            <Accordion title={title} content={content} />
          </div>
          <div className='figure-button-container'>
            <Button label={'Make an Offer'} />
          </div>
        </div>
      </div>

    </>
  )
}