import React from "react";
import "./App.scss";
import Header from './components/Header';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header className="title"/>
        <Photos className="photo-container" />
      </div>
    </div>
  );
}

export default App;
