import { React, useState, useEffect } from 'react'; 
import './ToggleButton.css'

export const ToggleButton = () => {

    const [ isDarkMode, setIsDarkMode ] = useState (false); 

    const handleClick = () => {
        setIsDarkMode(!isDarkMode); 
    }; 

    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [isDarkMode]);

    return (
        <div className='toggle-button'>
            <button onClick={handleClick}>Toggle Theme</button>
        </div>
    )

}