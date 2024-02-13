# WeebTrade
<img src="https://i.ibb.co/jV6VRnL/Screen-Shot-2023-11-16-at-11-06-30-AM.png" alt="Screen-Shot-2023-11-16-at-11-06-30-AM" border="0" height='300px'><br/>
A full stack ecommerce application built in a ReactJS front end with a Ruby/Rails backend

## Table of Contents
[WeebTrade](#weebtrade)
- [WeebTrade](#weebtrade)
  - [Table of Contents](#table-of-contents)
  - [About this project](#about-this-project)
  - [Technologies used in this project](#technologies-used-in-this-project)
  - [Code Samples](#code-samples)
  - [Design Link](#design-link)
  - [Front End Component Structure](#front-end-component-structure)
  - [Backend Design and Structure](#backend-design-and-structure)

## About this project

Anime figures are a very expensive hobby. Depending on the type of figure someone is looking for it can range up to $100s of dollars and more depending on the character someone is looking for. Looking around online there are multiple websites that cater to the trading of anime figures, but I thought the UI could be a little bit better, so this is a portfolio project I decided to create and I hope to expand it and make it an actual working site. 

A user would be able to set up a little profile showing up what figures they are looking for and what figures they have up for trade, sort of like an etsy shop of sorts. 

## Technologies used in this project
| FrontEnd      | BackEnd        | Various Tools  |
| ------------- |:-------------:| -----:|
| React.js    | Ruby and Rails | Figma for design| 
| Typescript     | SupaBase (currently)      |   Postman for API Testing|
| SCSS |     |    VSCode |
| Redux for state management |     |    |
| Vite|     |   |

## Code Samples 
While working on the AnimeDetails Component I came across an interesting problem which would cause me to resort to prop drilling. I found that I was passing down the figures prop through multiple components. Since my vision for this project was going to be more complex later on, I decided to create a context for the figures since I knew that it would be used acrossed the application later on. 

```
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
```

With this I ended up creating a custom hook which would allow me access to the figures object throughout the application. I ended up also moving the fetching logic from the API into the context as well. 

## Design Link
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FpJFbA67zKc0XxbFYwv5p3J%2FWeebTrades%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DazWqmpzmUrnGAdRX-1" allowfullscreen></iframe>

## Front End Component Structure
https://whimsical.com/weebtrade-structure-and-components-8EUU9ZTNiLK5MSgbWSEbwS

## Backend Design and Structure 
*Coming Soon*