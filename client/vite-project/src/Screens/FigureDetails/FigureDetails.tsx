import Accordion from "../../Components/Accordion/Accordion";
import { useFigures } from "../../Context/FiguresContext";
import Button from "../../Components/Button/Button";
import './FigureDetails.scss';
import Ratings from "../../Components/Ratings/Ratings";
import { useParams } from "react-router-dom";
import SimilarFigures from "../../Components/SimilarFigures/SimilarFigures";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumb";
import UsersOffers from "../../Components/UsersOffering/UsersOffer";
import { useUsers } from "../../Context/UsersContext";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import { disclaimerMessage, disclaimerTitle } from "../../constants";
import RadioButton from "../../Components/RadioButton/RadioButton";
import RadioButtonGroup from "../../Components/RadioButton/RadioButtonGroup/RadioButtonGroup";

export default function FigureDetails(props) {
  const { FigureName } = useParams();
  const figures: any = useFigures();
  const users: any = useUsers();
  const allFigures = figures.figures;
  const allUsers = users.users;
  const allShops = props.shops;
  const currentFigure = allFigures.find((figure) => figure.FigureName.toLowerCase() === FigureName?.toLowerCase());
  const modalTitle = 'Make an offer';
  // const modalBody = 'Are you looking to sell and make money or are you looking to trade a figure? '
  const breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Figures', path: '/browse/figures' },
    { label: FigureName, path: `browse/figures/${FigureName}`}
  ]


  const footerDetails = [
    { label: 'Confirm', color: 'green', size: 'small',  onClick: () => console.log('Confirm clicked') },
    { label: 'Cancel', color: 'red', size: 'small',  onClick: () => console.log('Cancel clicked') }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log('this works!')
    setIsModalOpen(true);
  }

  const radioButtonOptions = [
    {
    label: 'Cash', value: 'cash'
    },
    {
      label: 'Figures', value: 'figures'
    }
]

  const modalBody = (
    <div>
    <p>Are you looking to sell and make money or are you looking to trade a figure?</p>
      <div className='radio-button-container'>
        <RadioButtonGroup options={radioButtonOptions} />
      </div>
    </div>
  )
  
  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData}/>
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
            <Accordion title={disclaimerTitle} content={disclaimerMessage} />
          </div>
          <div className='figure-button-container'>
            <Button label={'Make an Offer'} onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className='similar-figures-container'>
        <h2 className='similar-figures-header-details'>Similar Figures</h2>
        <SimilarFigures figures={figures} currentFigure={currentFigure} />
      </div>
      <div className='current-users-offers'>
        <h2>Current users Offering this figure</h2>
        <UsersOffers users={allUsers} shops={allShops} />
      </div>

      {isModalOpen ? <Modal isOpen={isModalOpen} modalTitle={modalTitle} modalBody={modalBody} footerContent={footerDetails} />  : ''}
    </>
  )
}