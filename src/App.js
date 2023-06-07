import React from 'react';
import './App.css';
import Weather from "./components/Forecast/Weather";

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  )
}

export default App;