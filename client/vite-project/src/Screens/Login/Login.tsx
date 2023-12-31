import React from 'react';
import Card from '../../Components/CardInfo/CardInfo';
import LoginIcons from '../../Components/LoginIcons/LoginIcons';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

export default function Login() {
  const cardTitle = 'Login';
  const loginInputs = ['Email', 'Password']

  return (
      <Card icons={LoginIcons} cardTitle={cardTitle} button={<Button label={cardTitle} />} input={loginInputs} />
  )
}