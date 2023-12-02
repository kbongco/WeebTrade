import { Shop, User } from "../../Interfaces/shop-interface";
import UserCard from "../UserCard/UserCard";
import './UsersOffer.scss';

export default function UsersOffers(props) {
  const allUsers = props.users;
  const allShops = props.shops;

  const userInfo = allUsers.map((user:User) => {
    const shopInfo = allShops.find((shop:Shop) => shop.id === user.shop);
    return {
      ...user,
      shop: shopInfo,
    }
  });

  return ( 
    <>
      <div className='current-users-description'>
        <h3>Here are some highly rated users currently offering this figure, send them an email or a discord message and let them know your interest!</h3>
      </div>
      <div className='current-users-container'>
        {userInfo.map((user:User, index:number) => (
  <UserCard key={index} user={user} />
))}
      </div>
    </>
  )
}