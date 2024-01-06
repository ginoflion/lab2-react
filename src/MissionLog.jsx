import React from "react";
import './MissionLog.css';

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

  componentDidMount() {
    this.verificarBackground();
  }

  verificarBackground = () => {
    const { missões, background } = this.state;
    if (background === "url('volcano.jpg')") {
      const missaoIndex = missões.findIndex(missao => missao.objetivo === 'Visitar o vulcão');

      if (missaoIndex !== -1) {
        this.concluirMissao(missaoIndex);
      }
    }
  };

  concluirMissao = (index) => {
    this.setState(prevState => {
      const missões = [...prevState.missões];
      missões[index].concluida = true;
      missões[index].exibirMissao = false; 
      return { missões };
    });
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
      </div>
    );
  }
}

export default MissionLog;
