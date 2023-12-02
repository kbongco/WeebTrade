import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ratings({ rating }: any) {
  console.log(rating);
  const maxLength = 6;
  const starsView = () => {
    const stars = [];
    for (let i = 1; i < maxLength; i++){
      const starIcons = i <= rating ? faStarSolid : faStar;
      stars.push(<FontAwesomeIcon key={i} icon={starIcons} />)
    }
    return stars;
  }
  return (
    <>
      {starsView()}
    </>
  )
}