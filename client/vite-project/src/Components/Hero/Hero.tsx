import './Hero.scss'

export default function Hero({ props }: any) {
  return (
    <div className='weeb-trade-hero-container'>
      <div className='weeb-trade-content'>
        <div className='weeb-trade-title'>
          <h1 className='weeb-title'>WeebTrades</h1>
        </div>
        <div className='weeb-grid-desktop'>
        <img className='weeb-take-money' src="https://i.ibb.co/ZKp0nfr/Screen-Shot-2023-11-06-at-11-03-13-AM.png" alt="Screen-Shot-2023-11-06-at-11-03-13-AM" border="0" />
        <div className='weeb-content-desc-button'>
          <div className='weeb-description'>
            <p>A platform for anime figure enthusiasts to trade and find rare figures! </p>
          </div>
          <div className='weeb-button-container'>
            <button className='weeb-button-sign'>Sign up</button>
            <button className='weeb-button-sign weeb-button-browse'>Browse</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}