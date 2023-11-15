import './Input.scss';

export default function Input({ label }: any) {
  return ( 
    <div className='weeb-input-container'>
      <div className='label-container'>
      <label className='label-text'>{label}</label>
      </div>
      <input className='weeb-input'></input>
    </div>
  )
}