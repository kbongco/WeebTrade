import ButtonComponent from '../../Interfaces/component-interface';
import './Button.scss';

export default function Button({ label, color, size, type, onClick }: ButtonComponent) {
  
  // Passing in the color as a prop to show which color will show up by default, it will be green

  return (
    <div className='weeb-button-container'>
      <button className={`weeb-button weeb-button-${color} weeb-button-${size}`} onClick={onClick}>
        {label}
      </button>
    </div>
  )
}