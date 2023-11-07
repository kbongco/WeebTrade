import './NavBar.scss'

export default function NavBar() {
  return (
    <div className='weeb-nav-container'>
      <h1 className='weeb-logo'>WeebTrades</h1>
      <div className='weeb-navigation'>
        <ul className='weeb-navigation-links'>
          <li className='weeb-link'>Home</li>
          <li className='weeb-link'>Browse</li>
          <li className='weeb-link'>Top Anime</li>
        </ul>
      </div>
     </div>
  )
}