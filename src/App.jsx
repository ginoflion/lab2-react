import React from 'react';
import './App.css'; 
import Map from './Map';
import MissionLog from './MissionLog';
import Inventory from './Inventory';
import Character from './Character';
import CharacterProgression from './CharacterProgression';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Livro de Feitiços</h1>
    
        <Map />
        <Inventory />
        <MissionLog />
        <Character/>
        <CharacterProgression/>
        
      </div>
      
    );
  }
}

export default App;
