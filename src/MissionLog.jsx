import React from "react";
import './MissionLog.css' 

class MissionLog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        missaoConcluida: false
      };
    }
  
    concluirMissao = () => {
      this.setState({ missaoConcluida: true });
    }
  
    render() {
      const { missaoConcluida } = this.state;
  
      return (
        <div className={`RegistroMissao ${missaoConcluida ? 'concluida' : ''}`}>
          <h2>Missões</h2>
          <ul>
            {!missaoConcluida && <li className="ObjetivoMissao">Missão a ser completada</li>}
            {/* Adicione mais missões conforme necessário */}
          </ul>
          {/* Adicione aqui a lógica ou chamada de função que marca a missão como concluída */}
          {/* Exemplo: <button onClick={this.concluirMissao}>Concluir Missão</button> */}
        </div>
      );
    }
  }
export default MissionLog