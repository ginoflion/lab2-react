import React from "react";
import './MissionLog.css';
import Map from './Map';  // Importe o componente Map

class MissionLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missões: [
        { id: 1, objetivo: 'Visitar o vulcão', concluida: false, exibirMissao: true },
      ],
      background: document.body.style.backgroundImage
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

  handleBackgroundButtonClick = () => {
    // Adicione a lógica para transformar background.jpg em volcano.jpg
    document.body.style.backgroundImage = "url('volcano.jpg')";

    // Verifique se a missão 'Visitar o vulcão' está presente e marque como concluída
    const missaoIndex = this.state.missões.findIndex(missao => missao.objetivo === 'Visitar o vulcão');
    if (missaoIndex !== -1) {
      this.concluirMissao(missaoIndex);
    }
  };

  render() {
    const { missões, background } = this.state;

    return (
      <div className="RegistroMissao">
        <h2>Missões</h2>
        <ul>
          {missões.map((missao) => (
            missao.exibirMissao && !missao.concluida && background !== "url('volcano.jpg')" && (
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
