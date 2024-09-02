import React from "react";
import "./map.css";
import MapImage from "../../assets/images/map.png";
function Map() {
  return (
    <div className="map-container">
      <h1 className="map-header">
        <span className="highlight">КАРТА</span>
      </h1>
      <div className="map-content">
        <div className="map-info">
          <h2>АДРЕС:</h2>
          <ul>
            <li>8(930) 437-63-40</li>
            <li>8(930) 291-60-32</li>
            <li>8(931) 424-53-20</li>
          </ul>
          <h2>РЕЖИМ РАБОТЫ:</h2>
          <p>С 6.66 ДО 10.111</p>
        </div>
        <div className="map-image-container">
          <img src={MapImage} alt="Map" className="map-image" />
        </div>
      </div>
    </div>
  );
}

export default Map;
