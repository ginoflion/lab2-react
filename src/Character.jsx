import React, { useState, useEffect } from 'react';
import './Character.css';

const Character = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'w':
        case 'a':
        case 's':
        case 'd':
          setIsWalking(true);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'w':
        case 'a':
        case 's':
        case 'd':
          setIsWalking(false);
          break;
        default:
          break;
      }
    };

    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'w':
          setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
          break;
        case 'a':
          setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
          break;
        case 's':
          setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
          break;
        case 'd':
          setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="character" style={{ position: 'relative', left: position.x, top: position.y }}>
      <div className={isWalking ? 'running-animation' : 'idle-animation'}></div>
    </div>
  );
};

export default Character;
