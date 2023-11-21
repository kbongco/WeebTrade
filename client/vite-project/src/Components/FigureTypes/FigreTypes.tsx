import FigureTypesInterface from '../../Interfaces/figure-type-interface';
import './FigureTypes.scss'

export default function FigureTypes(props: any) {
  return ( 
    <div className='figures-container'>
      <h2 className='figures-header'>Types of Figures</h2>
      <div className='figures-images'>
        {props.figureTypes.map((figureType: FigureTypesInterface) => (
          <div className='figure-image-container' key={figureType.id}>
            <img className='figure-image' src={figureType.FigureImg} alt={figureType.FigureType} />
            <div className='figure-text-overlay'>
              {figureType.FigureType}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}