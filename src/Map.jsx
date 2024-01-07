import React from "react";
import './Map.css';
import Item from "./Item";



class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMap: null
    };
  }

  handleMapClick = (mapIndex) => {
    this.setState({ selectedMap: mapIndex });

    if (mapIndex === 0) {
      document.body.style.backgroundImage = "url('volcano.jpg')";
      this.props.onMapClick(0);
    } else if(mapIndex===1){
      document.body.style.backgroundImage = "url('forest.jpg')";
    } else if(mapIndex===2){
      document.body.style.backgroundImage = "url('desert.jpg')";
    }
   
  }

  render() {
    const { selectedMap } = this.state;

    return (
      <div className="containerMap">
        <div className={`mapa ${selectedMap === 0 ? "selected" : ""}`} onClick={() => this.handleMapClick(0)}>
        <img src={'./fireIcon.png'} alt="Fire" />
        </div>
        <div className={`mapa ${selectedMap === 1 ? "selected" : ""}`} onClick={() => this.handleMapClick(1)}>
        <img src={'./forestIcon.png'} alt="forestIcon" />
        {selectedMap === 1 && <Item />}
        </div>
        <div className={`mapa ${selectedMap === 2 ? "selected" : ""}`} onClick={() => this.handleMapClick(2)}>
        <img src={'./desertIcon.png'} alt="DesertIcon" />
        </div>
      </div>
    );
  }
}

export default Map;
