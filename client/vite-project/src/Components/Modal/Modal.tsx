import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';
import ButtonComponent from '../../Interfaces/component-interface';
import ModalComponent from '../../Interfaces/component-interface';


export default function Modal({ isOpen, modalTitle, onClose, modalBody, footerContent }: ModalComponent){

  const handleClose = () => {
    onClose();
  }

  return (
    <div className={`modal-container ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal">
        <div className='modal-content'>
          <header className='modal-header'>
            <div className='close-container'>
              <button className='close-button' onClick={handleClose}>
                <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <h1>{modalTitle}</h1>
          </header>
          {modalBody}
          <footer className='modal-footer'>
            {footerContent && footerContent.length > 0 && (
              <div className='footer-buttons-container'>
                {footerContent.map((button: ButtonComponent, index: number) => (
                  <Button key={index} onClick={button.onClick} color={button.color} label={button.label} size={button.size} />
                ))}
              </div>
            )}
          </footer>
        </div>
      </div>
    </div>
  )
}