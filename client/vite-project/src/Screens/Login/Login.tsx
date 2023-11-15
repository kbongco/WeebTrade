import React from 'react';
import Card from '../../Components/CardInfo/CardInfo';
import LoginIcons from '../../Components/LoginIcons/LoginIcons';
import Button from '../../Components/Button/Button'

export default function Login() {
  const cardTitle = 'Login';

  return (
    <div>
      <Card icons={LoginIcons} cardTitle={cardTitle} button={<Button label={cardTitle} />} />
    </div>
  )
}