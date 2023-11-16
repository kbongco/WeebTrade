import './CardInfo.scss';
import LoginIcons from '../LoginIcons/LoginIcons';
import Input from '../Input/Input';
import { CardComponent } from '../../Interfaces/component-interface'


export default function Card({ cardTitle, icons, button, input }: CardComponent) {
  console.log(input);
  return (
    <div className='weeb-trade-card'>
      <h1 className='weeb-trade-text'>{cardTitle}</h1>
      <div className='weeb-trade-card-inputs'>
      {Array.isArray(input) ? (
          <div className='weeb-trade-card-input-one'>
            {input.map((label, index) => (
              <div key={index} className='weeb-trade-input-container'>
                <Input label={label} />
              </div>
            ))}
          </div>
        ) : (
          <div className='weeb-trade-input-container'>
            {input && <Input label={input} />}
          </div>
        )}
        <div className='weeb-trade-card-button-container'>
          {button}
        </div>
      </div>     {icons && <LoginIcons/>}
    </div>
  )
}