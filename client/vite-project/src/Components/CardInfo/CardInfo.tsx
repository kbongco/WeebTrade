import React from 'react';
import './CardInfo.scss';
import DiscordIcon from '../../assets/discord.svg'
import GoogleIcon from '../../assets/google.svg';


export default function Card(props: any) {
  return (
    <div className='weeb-trade-card'>
      <h1 className='weeb-trade-text'>This is test text</h1>
      <div className='weeb-trade-card-inputs'>
        <div className='weeb-trade-card-input-one'>
          <div className='weeb-trade-input-container weeb-trade-top-container'>
            <label>Email</label>
            <input className='input-one' type="text" readOnly />
          </div>
          <div className='weeb-trade-input-container'>
            <label>Password</label>
            <input className='input-two' type="text" readOnly />
          </div>
        </div>
        <div className='weeb-trade-card-button-container'>
          <button className='weeb-button-sign'>Login</button>
        </div>
      </div>
      <div className='weeb-trade-icons'>
        {/* <p>Test</p> */}
        <img className='login-icon-one' src={DiscordIcon} alt="Example Icon" />
       <img className='login-icon-two' src={GoogleIcon}/>
      </div>
    </div>
  )
}