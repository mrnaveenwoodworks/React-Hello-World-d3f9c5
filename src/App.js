import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hello World!</h1>
        <p className="App-subtitle">
          Welcome to my first React application
        </p>
        {clickCount > 0 && (
          <p>You've clicked the button {clickCount} times!</p>
        )}
        <button onClick={handleButtonClick} className="App-button">
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;