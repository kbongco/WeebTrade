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
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal/Modal";
import { NSFWModalBody, NSFWModalTitle, disclaimerMessage, disclaimerTitle, monthsData } from "../../constants";
import RadioButtonGroup from "../../Components/RadioButton/RadioButtonGroup/RadioButtonGroup";
import { Figures } from "../../Interfaces/anime-interface";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";

export default function FigureDetails(props) {
  const { FigureName } = useParams();
  const figures: any = useFigures();
  const users: any = useUsers();
  const allFigures = figures.figures;
  const allUsers = users.users;
  const allShops = props.shops;
  const currentFigure = allFigures.find((figure: Figures) => figure.FigureName.toLowerCase() === FigureName?.toLowerCase());
  const modalTitle = 'Make an offer';
  const figureSFW = currentFigure?.safeforwork;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const breadcrumbData = [
    { label: 'Home', path: '/' },
    { label: 'Figures', path: '/browse/figures' },
    { label: FigureName, path: `browse/figures/${FigureName}` }
  ]

  console.log(currentFigure?.safeforwork, 'fig');
  console.log(currentFigure, 'fig');
  console.log(figureSFW, 'fig');

  const testFigureData = [
    { value: 'yorforgerFamilyVer', label: 'Yor Forger Family Ver' },
    {
      value: 'kentoNanamiPrize', label: 'Kento Nanami Prize Figure'
    },
    {
      value: 'nezukoKamadoPrize', label: 'Nezuko Kamado Xross Prize Figure'
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isSafeForWorkPic, setIsSafeForWorkPic] = useState(true);
  const [nsfwModalOpen, setnsfwModalOpen] = useState(false);

  const handleRadioButtonChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setnsfwModalOpen(false);
    setSelectedOption(null);
  }


  const radioButtonOptions = [
    { label: 'Cash', value: 'cash' },
    { label: 'Figures', value: 'figures' }
  ]

  const footerDetails = [
    { label: 'Confirm', color: 'green', size: 'small', onClick: () => console.log('Confirm clicked') },
    { label: 'Cancel', color: 'red', size: 'small', onClick: () => handleClose() }
  ];

  const modalBody = (
    <body className='modal-body'>
      <p className='modal-body-offer-text'>Are you looking to sell and make money or are you looking to trade a figure?</p>
      <div className='radio-button-container'>
        <RadioButtonGroup options={radioButtonOptions} onChange={handleRadioButtonChange} selectedOption={selectedOption} />
      </div>
      {selectedOption === 'cash' && (
        <div className='cash-input-container'>
          <Input label={'How much are you offering?'} />
        </div>
      )}

      {selectedOption === 'figures' && (
        <div className='figure-inputs-container'>
          <Select label={'Select a Figure from your inventory'} options={testFigureData} />
        </div>
      )}
    </body>
  )

  const NSFWModalBody = (
    <body className='modal-body'>
      <p className='modal-body-nsfw-text'>
        This figure is catageorized as NSFW Please verify your age before proceeding
      </p>
      <div className='input-containers'>
        <Select label={'Month'} options={monthsData} />
      </div>
    </body>
  )

  const isSafeForWork = (figureSFW?: boolean) => {
    if (!isAgeVerified && figureSFW === false) {
      setIsSafeForWorkPic(false);
      setnsfwModalOpen(true);
    }
  }

  useEffect(() => {
    isSafeForWork(figureSFW);
  }, [figureSFW])

  return (
    <>
      <BreadCrumbs breadCrumbs={breadcrumbData} />
      <div className='figure-details-container'>
        <div className='figure-photo-container'>
          <img
            className={`figure-photo ${!isAgeVerified && !figureSFW ? 'blurred' : ''}`}
            src={currentFigure?.imgLink}
            alt="Figure Photo"
          />
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

      {isModalOpen ? <Modal isOpen={isModalOpen} modalTitle={modalTitle} modalBody={modalBody} footerContent={footerDetails} onClose={handleClose} /> : ''}

      {nsfwModalOpen ? <Modal isOpen={isModalOpen} modalTitle={NSFWModalTitle} modalBody={NSFWModalBody} footerContent={footerDetails} onClose={handleClose} /> : ''}
    </>
  )
}