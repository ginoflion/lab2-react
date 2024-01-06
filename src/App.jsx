import React from 'react';
import './App.css'; 
import SpellBook from './SpellBook';
import Map from './Map';
import Inventory from './Inventory';
import MissionLog from './MissionLog';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Livro de Feitiços</h1>
        <SpellBook />
        <Map />
        <Inventory />
        <MissionLog />
      </div>
      
    );
  }
}

export default App;
