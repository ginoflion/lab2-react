import React from "react";
import './MissionLog.css';
import Map from './Map';  

class MissionLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missões: [
        { id: 1, objetivo: 'Visitar o vulcão', concluida: false, exibirMissao: true }
      ],
    };
  }

  concluirMissao = (index) => {
    this.setState(prevState => {
      const missões = [...prevState.missões];
      missões[index].concluida = true;
      missões[index].exibirMissao = false; 
      return { missões };
    });
  };

  handleMapClick = (mapIndex) => {
    const missaoIndex = this.state.missões.findIndex(missao => missao.objetivo === 'Visitar o vulcão');
    if (missaoIndex !== -1) {
      this.concluirMissao(missaoIndex);
    }
  };

 
  render() {
    const { missões } = this.state;

    return (
      <div className="RegistroMissao">
        <h2>Missões</h2>
        <ul>
          {missões.map((missao) => (
            missao.exibirMissao && !missao.concluida && (
              <li key={missao.id} className="ObjetivoMissao">
                {missao.objetivo}
              </li>
            )
          ))}
        
        </ul>
        <Map onMapClick={this.handleMapClick} />
      </div>
      
    );
  }
}

export default MissionLog;
