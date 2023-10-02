import React, { useState } from 'react';
import './index.css';
import Header from "./Components/Header";
import Meme from "./Components/Meme";

export default function App() {

  // create state variable for dark mode
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  // create function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

  // toggle class on body element for dark mode
  document.body.classList.toggle('dark-mode')
  }



  return (
    <div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Meme />
    </div>
  );
}






