import React, { useState } from "react";
import './CharacterProgression.css';
import SpellBook from "./SpellBook";
const CharacterProgression = () => {
  const [stats, setStats] = useState({
    Sneak: 10,
    Cura: 10,
    Salto: 10,
    Inteligência: 10,
    Velocidade: 10,
    Visão: 10,
  });

  const aumentarStatsPorFeitico = (feitiço) => {
    setStats(prevStats => ({
      ...prevStats,
      [feitiço]: prevStats[feitiço] + 5,
    }));
  };

  return (
    <div>
      <div className="characterProgressionContainer">
        <div className="statsLabel">Estatísticas:</div>
        {Object.keys(stats).map((statName) => (
          <div key={statName} className="statsItem">{statName}: {stats[statName]}</div>
        ))}
      </div>
      <SpellBook onSpellCast={aumentarStatsPorFeitico} />
    </div>
  );
}

export default CharacterProgression;
