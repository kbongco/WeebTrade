export default function Ratings() {
  return <>
          {[...Array(5)].map((star) => {        
        return (         
          <span className="star">&#9733;</span>        
        );
      })}
  </>
}