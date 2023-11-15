import DiscordIcon from '../../assets/discord.svg'
import GoogleIcon from '../../assets/google.svg';
import './LoginIcons.scss'

export default function LoginIcons() {
  return ( 
    <div className='weeb-trade-icons'>
    {/* <p>Test</p> */}
    <img className='login-icon-one' src={DiscordIcon} alt="Example Icon" />
   <img className='login-icon-two' src={GoogleIcon}/>
  </div>
  )
}