import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './navigation/Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Main />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
