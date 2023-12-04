import React, { useState } from 'react';
import RadioButton from '../RadioButton';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
}


export default function RadioButtonGroup({options}:RadioButtonProps) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedOption(value);
  }

  return ( 
    <>
      <div className='radio-button-group-container'>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          onChange={handleRadioButtonChange}
          checked={selectedOption === option.value}
        />
      ))}
      </div>
    </>
  )
}