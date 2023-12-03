import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './UserCard.scss';
import Ratings from "../Ratings/Ratings";

export default function UserCard({ user }) {
  console.log(user);
  const shopRating = Number(user?.shop?.shoprating);
  console.log(shopRating);
  return (
    <>
      <div className='user-card'>
        <div className='user-card-img-container'>
          <img className='user-img' src={user?.profilepic}/>
        </div>
        <div className='user-card-text'>
          <p className='user-shop-name'>{user?.shop?.shopname}</p>
          <div className='user-ratings-container'>
            <Ratings rating={shopRating} />
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