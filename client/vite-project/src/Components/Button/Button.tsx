import ButtonComponent from '../../Interfaces/component-interface';
export default function Button({ label}: ButtonComponent) {
  return (
    <div className='weeb-button-container'>
      <button>
        {label}
      </button>
    </div>
  )
}