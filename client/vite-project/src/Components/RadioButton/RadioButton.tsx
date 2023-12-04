import './RadioButton.scss';


export default function RadioButton({ label, isChecked, onChange, value }: any) { 
  
  const handleChange = () => {
    onChange(value);
    console.log(value);
  }
  return (
    <>
      <div className='radio-button-container'>
        <input type='radio' isChecked={isChecked} onChange={handleChange} />
        <label className='radio-label' value={value}>{label}</label>
      </div>
  </>
  )
}