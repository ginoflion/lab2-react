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
        
        <Character/>
        <CharacterProgression/>
        <Map />
        
        <MissionLog />
      
        <Inventory />
      </div>
      
    );
  }
}

export default App;
