import './NavBar.scss'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='weeb-nav-container'>
      <h1 className='weeb-logo'>WeebTrades</h1>
      <div className='weeb-navigation'>
        <ul className='weeb-navigation-links'>
          <li className='weeb-link'>Home</li>
          <li className='weeb-link'>Browse</li>
          <li className='weeb-link'>Top Anime</li>
          <li className='weeb-link'>
          <Link className='weeb-exact-link'>
            Search
            </Link>
            </li>
          <li className='weeb-link'>
          <Link className='weeb-exact-link' exact to='/login'>
            Login
            </Link>
          </li>
        </ul>
      </div>
     </div>
  )
}