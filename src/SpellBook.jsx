import React from "react";
import './SpellBook.css';

class SpellBook extends React.Component {
    constructor(props) {
      super(props);
  
      this.allSpells = ['Invisibilidade', 'Cura', 'Salto', 'Inteligência', 'Velocidade', 'Visão'];
  
      const selectedSpells = this.selectRandomSpells();
  
      this.state = {
        spells: selectedSpells,
      };
    }

    selectRandomSpells() {
      const allSpellsCopy = [...this.allSpells];
      const selectedSpells = [];
  
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * allSpellsCopy.length);
        const selectedSpell = allSpellsCopy.splice(randomIndex, 1)[0];
        selectedSpells.push(selectedSpell);
      }
  
      return selectedSpells;
    }
  
    handleSpellClick(spell) {
      alert(`Feitiço lançado: ${spell}`);
    }
  
    render() {
      return (
        <div>
          <ul>
            {this.state.spells.map((spell, index) => (
              <li key={index}>
                <button onClick={() => this.handleSpellClick(spell)}>
                  {spell}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  export default SpellBook;