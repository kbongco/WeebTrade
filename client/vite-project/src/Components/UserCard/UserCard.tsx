import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UserCard.scss';
import Ratings from "../Ratings/Ratings";

export default function UserCard(props) {
  return (
    <>
      <div className='user-card'>
        <div className='user-card-img-container'>
          <img className='user-img' src="https://i.ibb.co/Gxrcn0K/Screen-Shot-2023-11-26-at-11-08-03-PM.png" />
        </div>
        <div className='user-card-text'>
          <p className='user-shop-name'>Stick Shop</p>
          <div className='user-ratings-container'>
            <Ratings />
            </div>
        </div>
        <div className='user-card-details'>
          <div className='user-card-link'>
            <a href='/'>Visit their page</a>
            </div>
          <div className='user-contact-icons-container'>
            <FontAwesomeIcon icon={faDiscord} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </>
  )
}