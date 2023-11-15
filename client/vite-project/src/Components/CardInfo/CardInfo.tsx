import React from 'react';
import './CardInfo.scss';
import DiscordIcon from '../../assets/discord.svg'
import GoogleIcon from '../../assets/google.svg';
import LoginIcons from '../LoginIcons/LoginIcons';


export default function Card({cardTitle,icons, button}: any) {
  return (
    <div className='weeb-trade-card'>
      <h1 className='weeb-trade-text'>{cardTitle}</h1>
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
          {button}
        </div>
      </div>
     {icons && <LoginIcons/>}
    </div>
  )
}