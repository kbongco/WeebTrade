import React from 'react';
import './CardInfo.scss';

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
          
        </div>
      </div>
      <div className='weeb-trade-icons'>
        <p>Test</p>
        <p>Test</p>
      </div>
    </div>
  )
}