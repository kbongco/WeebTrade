import { createContext, useContext, useState, useEffect } from 'react';
import { getFigures } from '../services/figures';

const FiguresContext = createContext();

export const FiguresProvider = ({ children }) => {
  const [figures, setFigures] = useState<any>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const figuresArray = await getFigures();
        setFigures(figuresArray);
      } catch (error) {
        setError('Error getting figures data');
      }
    }

    fetchData();
  }, [])

  return ( 
    <FiguresContext.Provider value={{ figures, error }}>
      {children}
    </FiguresContext.Provider>
  )
}
export const useFigures = () => {
  return useContext(FiguresContext);
}
