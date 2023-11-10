import './ComingSoon.scss';

export default function ComingSoon() {
  return (
    <div className='coming-soon-container'>
      <div className='coming-soon-header-container'>
        <h1 className='coming-soon-header'>Coming Soon</h1>
      </div>
      <div className='coming-soon-message-container'>
        <p className='coming-soon-message'>This site is very much still under construction. If you would like to learn more and stay up to date and find out when this will be up and running drop your email to subscribe! </p>
      </div>

      <div className='coming-soon-email-sub'>
        {/* Convet input into a reusable component  */}
        <div className='coming-soon-input-container'>
          <label>Drop your Email Here</label>
          <input className='coming-soon-input'></input>
          <div className='coming-soon-button-container'>
            {/* Convert Button into a component as well  */}
            <button className='coming-soon-subscribe-button'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}