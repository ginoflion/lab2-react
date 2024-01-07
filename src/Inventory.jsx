import React from "react";
import Item from "./Item";
import './Inventory.css';

class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: Array(3).fill(null) // Inicializa o inventário com 3 slots vazios
    };
  }

  adicionarItemAoInventario = (item) => {
    const primeiroSlotVazio = this.state.itens.findIndex((slot) => slot === null);
    if (primeiroSlotVazio !== -1) {
      const novoInventario = [...this.state.itens];
      novoInventario[primeiroSlotVazio] = item;

      this.setState({ itens: novoInventario });

      console.log(`${item} adicionado ao inventário no slot ${primeiroSlotVazio + 1}.`);
    } else {
      console.log("O inventário está cheio. Não é possível adicionar mais itens.");
    }
  };

  removerItemDoSlot = (index) => {
    const novoInventario = [...this.state.itens];
    novoInventario[index] = null;
    this.setState({ itens: novoInventario });
    console.log(`Item removido do slot ${index + 1}.`);
  };

  adicionarQuadradoAoInventario = () => {
    const item = <Item isVisible={true} onAddToInventory={() => this.adicionarItemAoInventario(item)} />;
    this.adicionarItemAoInventario(item);
  };

  render() {
    return (
      <div>
        <div className="containerInventory">
          {this.state.itens.map((item, index) => (
            <div key={index} className="inventory-box">
              {item}
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          {this.state.itens.map((item, index) => (
            <button key={index} onClick={() => this.removerItemDoSlot(index)}>Remover </button>
          ))}
        </div>
        <button className="addSquareButton" onClick={this.adicionarQuadradoAoInventario}>Adicionar Maça</button>
      </div>
    );
  }
}

export default Inventory;
