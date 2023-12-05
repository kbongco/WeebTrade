import './RadioButton.scss';


export default function RadioButton({ label, checked, onChange, value }: any) { 
  
  const handleChange = () => {
    onChange(value);
    console.log(value);
  }
  return (
    <>
      <div className='radio-button-container'>
        <input type='radio' checked={checked} onChange={handleChange} />
        <label className='radio-label' value={value}>{label}</label>
      </div>
  </>
  )
}