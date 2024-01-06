import React from "react";
import './Inventory.css';

class Inventory extends React.Component {

    render() {
        return (
          <div className="containerInventory">
            <div className="inventory-box"></div>
            <div className="inventory-box"></div>
            <div className="inventory-box"></div>
          </div>
        );
      }
    }
    
   export default Inventory;

