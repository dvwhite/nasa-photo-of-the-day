import React from "react";
import "./App.css";
import Header from './components/Header';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Photos className="photo-container" />
      </div>
    </div>
  );
}

export default App;
