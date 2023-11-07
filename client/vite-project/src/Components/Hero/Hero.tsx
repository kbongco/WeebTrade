import HeroComponent from '../../Interfaces/component-interface'
import './Hero.scss'

export default function Hero({ title, imageSrc, description, buttonLabels }: HeroComponent) {
  return (
    <div className='weeb-trade-hero-container'>
      <div className='weeb-trade-content'>
        <div className='weeb-trade-title'>
          <h1 className='weeb-title'>{title}</h1>
        </div>
        <div className='weeb-grid-desktop'>
          <img className='weeb-take-money' src={imageSrc} alt="Screen-Shot-2023-11-06-at-11-03-13-AM" border="0" />
        <div className='weeb-content-desc-button'>
          <div className='weeb-description'>
              <p>{description}</p>
          </div>
          <div className='weeb-button-container'>
          {buttonLabels.map((label: string, index: number) => (
                <button key={index} className='weeb-button-sign'>
                  {label}
                </button>
              ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}