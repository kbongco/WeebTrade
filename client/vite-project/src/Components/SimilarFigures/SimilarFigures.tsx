import { useFigures } from "../../Context/FiguresContext";
import ProductCard from "../ProductCard/ProductCard";

export default function SimilarFigures(props) {
  
  const figures: any = useFigures();
  const allFigures = figures.figures;

  const similarFigures = allFigures.filter((figure) => {
    return (
      figure.Anime === props.currentFigure.Anime &&
      figure.Material === props.currentFigure.Material &&
      figure.FigureName.toLowerCase() !== props.currentFigure.FigureName.toLowerCase()
    );
  });

  console.log(similarFigures);

  
  return (
    <>
      <div className='similar-figures-container'>
        <div className='similar-figures-text'>
        <p>Some figures that you might be interested in based on what you are looking at above</p>
        </div>
        <div className='all-similar-figures-container'>
          {similarFigures.length > 0 ? (
            similarFigures.map((figure: any, id: number) => (
                <ProductCard key={id} {...figure} />
            ))
          ) : (
            <p>No similar figures found.</p>
          )}
        </div>
      </div>
    </>
  );
}