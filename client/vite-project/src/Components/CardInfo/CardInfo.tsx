import './CardInfo.scss';
import LoginIcons from '../LoginIcons/LoginIcons';
import Input from '../Input/Input';
import { CardComponent } from '../../Interfaces/component-interface'
import Button from '../Button/Button';
import { ButtonStyle } from '../../enums/component-enums';


export default function Card({ cardTitle, icons, button, input, buttonsGroup }: CardComponent) {
  console.log(buttonsGroup);
  return (
    <div className='card-container'>
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
          {buttonsGroup && (
            <div className='weeb-trade-card-additional-buttons'>
              {buttonsGroup.map((label: string, index: number) => (
                <Button key={index} label={label} style={ButtonStyle.xSmall} />
              ))}
            </div>
          )}
        <div className='weeb-trade-card-button-container'>
          {button}
        </div>
        </div>
        {icons && <LoginIcons />}
    </div>
    </div>
  )
}