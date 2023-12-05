import { useState } from 'react';

export default function Select({ label, options }: any) {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectchange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (<>
    <div className='select-container'>
      <label className='select-label'>
        {label}
      </label>
      <select value="">
        <option>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </>
  )
}