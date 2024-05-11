//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components3/navbar2/navbar';
import Hero from './components3/hero.jsx';
import Card from "./components3/card.jsx"; 
import Astros from "./components3/astros/astros.jsx"
;
import { Routes, Route } from 'react-router-dom';




function App(){

  const links = [
    {
    id: 1,
    text: "home",
    link: "/"
  },
  {
    id: 2,
    text: "apod",
    link: "/apod",
  },
{
  id: 3,
  text: "astros",
  link: "/astros",
}
];

  return (
  <>
    <Navbar header="space-app" links={links}/>
    <Routes>
      <Route element={<Hero />} path="/" />
      <Route element={<Astros />} path="/astros" />
    </Routes>
    {/** <Hero />
      <Astros />*/}
    
    
  </>)
}


export default App;

