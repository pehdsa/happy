import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import MapMarker from '../../assets/images/map-marker.svg';

const PageMap = styled.div`
    display: grid;    
    grid-template-columns: 400px 1fr;
    height: 100vh;

    & aside { 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%); 
        padding: 80px;
    }

    & aside img { display: block;width: 64px;height: 72px;margin-bottom: 80px }
    & aside h1 { font-size: 40px;line-height: 42px;padding-bottom: 24px; }
    & aside p { font-size: 18px;line-height: 28px }
    & aside .location { display: flex; flex-direction: column; }

    & main { background-color: #000 }

`;

const OrphanagesMap: React.FC = () => {
    
    //const center = [-20.4648844, -54.6452804 ];

    return (
        <PageMap>
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
        </PageMap>
    );
}

export default OrphanagesMap;