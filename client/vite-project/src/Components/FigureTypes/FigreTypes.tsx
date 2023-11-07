import './FigureTypes.scss'

export default function FigureTypes() {
  return ( 
    <div className='figures-container'>
      <h2 className='figures-header'>Types of Figures</h2>
      <div className='figures-images'>
        <div className='figure-image-container'>
          <img className='figure-image' src="https://i.ibb.co/T4cCnCV/Screen-Shot-2023-11-06-at-12-02-52-PM.png" alt="Screen-Shot-2023-11-06-at-12-02-52-PM" border="0" />
          <div className='figure-text-overlay'>
            Nendroid
          </div>
        </div>
        <div className='figure-image-container'>
          <img className='figure-image' src="https://i.ibb.co/H2Fw9m4/Screen-Shot-2023-11-06-at-12-06-55-PM.png" alt="Screen-Shot-2023-11-06-at-12-06-55-PM" border="0" />
          <div className='figure-text-overlay'>
            Funko
          </div>
        </div>
        <div className='figure-image-container'>
          <img className='figure-image'src="https://i.ibb.co/y6Ybg7m/Screen-Shot-2023-11-06-at-12-12-42-PM.png" alt="Screen-Shot-2023-11-06-at-12-12-42-PM" border="0" />
          <div className='figure-text-overlay'>
            PVC/Prize Figure
          </div>
        </div>
        <div className='figure-image-container'>
          <img className='figure-image' src="https://i.ibb.co/wsmdh7Q/Screen-Shot-2023-11-06-at-12-18-17-PM.png" alt="Screen-Shot-2023-11-06-at-12-18-17-PM" border="0" />
          <div className='figure-text-overlay'>
            Scale Figure
          </div>
        </div>
      </div>
    </div>
  )
}