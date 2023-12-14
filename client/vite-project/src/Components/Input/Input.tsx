import './Input.scss';
import InputComponent from '../../Interfaces/component-interface';

export default function Input({ label, styles, value, onChange }: InputComponent) {
  
  return ( 
    <div className='weeb-input-container'>
      <div className='label-container'>
      <label className='label-text'>{label}</label>
      </div>
      <input className={`weeb-input ${styles}`}
        value={value}
      onChange={onChange}></input>
    </div>
  )
}