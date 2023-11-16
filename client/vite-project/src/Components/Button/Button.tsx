import ButtonComponent from '../../Interfaces/component-interface';
import './Button.scss';
import { ButtonStyle } from '../../enums/component-enums';

export default function Button({ label, style = ButtonStyle.regular }: ButtonComponent) {

  const getStyles = (): string => {
    switch (style) {
      case ButtonStyle.xSmall:
        return 'x-small'
      default:
        return ''
    }
  }

  return (
    <div className='weeb-button-container'>
      <button className={`weeb-button ${getStyles()}`}>
        {label}
      </button>
    </div>
  )
}