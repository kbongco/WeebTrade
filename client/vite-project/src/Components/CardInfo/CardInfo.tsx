import './CardInfo.scss';
import LoginIcons from '../LoginIcons/LoginIcons';
import Input from '../Input/Input';


export default function Card({cardTitle,icons, button, input}: any) {
  return (
    <div className='weeb-trade-card'>
      <h1 className='weeb-trade-text'>{cardTitle}</h1>
      <div className='weeb-trade-card-inputs'>
        <div className='weeb-trade-card-input-one'>
          <div className='weeb-trade-input-container weeb-trade-top-container'>
          <Input label="Email"/>
          </div>
          <div className='weeb-trade-input-container'>
          <Input label="Password"/>
          </div>
        </div>
        <div className='weeb-trade-card-button-container'>
          {button}
        </div>
      </div>
     {icons && <LoginIcons/>}
    </div>
  )
}