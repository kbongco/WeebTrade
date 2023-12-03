import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Modal.scss'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Modal({ isOpen, modalTitle, onClose }: any){
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleClose = () => {
    setIsModalOpen(false);
    console.log('Closing!')
    console.log(isOpen);
  }

  return (
    <div className='modal-container'>
      <div className="modal">
        <div className='modal-content'>
          <header>
            <div className='close-container'>
              <button className='close-button' onClick={handleClose}>
                <FontAwesomeIcon icon={faX} />
                </button>
            </div>
            <h1>{modalTitle}</h1>
          </header>
          <body>
            <p>Modal Body</p>
          </body>
          <footer>
            <p>This is a footer</p>
          </footer>
        </div>
      </div>
    </div>
  )
}