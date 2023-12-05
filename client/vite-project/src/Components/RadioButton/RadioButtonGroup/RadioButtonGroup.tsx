import React, { useState } from 'react';
import RadioButton from '../RadioButton';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
}


export default function RadioButtonGroup({options, onChange, selectedOption }:any) {

  return ( 
    <>
      <div className='radio-button-group-container'>
      {options.map((option:RadioButtonOption, index:number) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          onChange={onChange}
          checked={selectedOption === option.value}
        />
      ))}
      </div>
    </>
  )
}