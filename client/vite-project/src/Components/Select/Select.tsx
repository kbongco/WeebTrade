import { useEffect, useState } from 'react';
import './Select.scss';

export default function Select({ label, options }: any) {

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  }

  useEffect(() => {
  },[selectedOption])

  return (<>
    <div className='select-container'>
      <label className='select-label'>
        {label}
      </label>
      <select value={selectedOption} onChange={handleSelectChange}>
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