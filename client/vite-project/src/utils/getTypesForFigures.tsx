import { Figures } from "../Interfaces/anime-interface";
import FigureTypesInterface from "../Interfaces/figure-type-interface";

export default function getFigureTypesForFigures(animeFigures: Figures[], figureTypes: FigureTypesInterface[]) {
  return animeFigures.map((figure: Figures) => {
   return figureTypes.find((type: any) => type.id === figure.FigureType);
  })
}

