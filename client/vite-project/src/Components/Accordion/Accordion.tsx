import React, { useState } from 'react';
import AccordionComponent from '../../Interfaces/component-interface';
import './Accordion.scss';


export default function Accordion({ title, content }: AccordionComponent) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='accordion-container'>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
};

