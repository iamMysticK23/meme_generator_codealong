import React, { useState } from "react";


export default function Header(props) {
    const [ buttonClicked, setButtonClicked ] = useState(false)

    const toggleDarkMode = () => {
        props.toggleDarkMode();
        setButtonClicked(!buttonClicked);
    };

    // CSS class for button
    const buttonClass = buttonClicked ? 'darkMode--button clicked' : 'darkMode--button';


    // added context for dark mode feature
    return (
        <header className="header">
        <img src="../images/troll-face.png" alt="troll face" className="header--image"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
        <button className={buttonClass}
                onClick={toggleDarkMode}
                >
                    {props.isDarkMode ? 'Go Light Mode' : 'Go Dark Mode'}
                </button>
        </header>
    )
}