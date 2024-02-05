import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

function MapComponent({ location }) {
  useEffect(() => {
    if (!location) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const coords = [parseFloat(data[0].lat), parseFloat(data[0].lon)];

          const map = new Map({
            target: 'map',
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
              center: coords,
              zoom: 4
            })
          });
          console.log('DATA', data[0])
        } else {
          console.error('No se encontraron resultados de geocodificación para la ubicación:', location);
        }
      })
      .catch(error => {
        console.error('Error al geocodificar la ubicación:', error);
      });
  }, [location]);

  return <div id="map" style={{ width: '50%', height: '400px' }}></div>;
}

export default MapComponent;
