import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import '../index.css';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

