import React, { useState } from 'react';
import AccordionComponent from '../../Interfaces/component-interface';
import './Accordion.scss';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Accordion({ title, content }: AccordionComponent) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='accordion-container'>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
};

