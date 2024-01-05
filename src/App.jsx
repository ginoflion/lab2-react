import React from 'react';
import './App.css'; 
import SpellBook from './SpellBook';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Livro de Feitiços</h1>
        <SpellBook />
      </div>
      
    );
  }
}

export default App;
