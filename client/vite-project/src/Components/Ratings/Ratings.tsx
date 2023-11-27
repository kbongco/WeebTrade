import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ratings() {
  const maxLength = 5;
  const starArr = Array.from({ length: maxLength }, (_, index) => index + 1);
  return (
    <>
      {starArr.map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
        />
      ))}
    </>
  )
}