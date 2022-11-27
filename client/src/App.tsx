import React from 'react';
import logo from './logo.svg';
import { Navbar } from './component/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar is_signed_in={false} name={"Paul"} new_alarm={3}/>
      </header>
    </div>
  );
}

export default App;
