import './NavBar.scss'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='weeb-nav-container'>
      <h1 className='weeb-logo'>WeebTrades</h1>
      <div className='weeb-navigation'>
        <ul className='weeb-navigation-links'>
          <li className='weeb-link'>
            <Link className='weeb-exact-link' to='/'>
              Home
            </Link>
          </li>
          <li className='weeb-link'>
            <Link className='weeb-exact-link' to='/browse/series'>Browse</Link>
          </li>
          <li className='weeb-link'>Top Anime</li>
          <li className='weeb-link'>
            <Link className='weeb-exact-link' to='/search'>
              Search
            </Link>
          </li>
          <li className='weeb-link'>
            <Link className='weeb-exact-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}