import ButtonComponent from '../../Interfaces/component-interface';
import './Button.scss';

export default function Button({ label}: ButtonComponent) {
  return (
    <div className='weeb-button-container'>
      <button className='weeb-button'>
        {label}
      </button>
    </div>
  )
}