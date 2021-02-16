import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import MapMarker from '../../assets/images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
    
    //const center = [-20.4648844, -54.6452804 ];

    return (
        <div className="page-map">
            <aside>
                <div>
                    <img src={ MapMarker } alt="" />
                    <h1>Escolha um orfanato no mapa</h1>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </div>
                <div className="location">
                    <strong>Campo Grande</strong>
                    <span>Mato Grosso do Sul</span>
                </div>
            </aside>
            <main>
                <MapContainer                 
                    center={[-20.4648844, -54.6452804 ]}
                    zoom={14} 
                    style={{ width: '100%', height: '100%' }} 
                >
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                </MapContainer> 
            </main>
        </div>
    );
}

export default OrphanagesMap;