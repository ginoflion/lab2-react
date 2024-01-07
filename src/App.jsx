import React from 'react';
import './App.css'; 
import SpellBook from './SpellBook';
import Map from './Map';
import MissionLog from './MissionLog';
import Inventory from './Inventory';
import Character from './Character';
import Item from './Item';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Livro de Feitiços</h1>
        <SpellBook />
        <Map />
        <Inventory />
        <MissionLog />
        <Character/>
        <Item/>
        
      </div>
      
    );
  }
}

export default App;
