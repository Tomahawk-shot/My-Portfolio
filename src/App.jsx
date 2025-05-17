import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="main">
        <Content />
      </main>
    </div>
  );
}

export default App;