import React, { useState, useEffect } from 'react';
import { FiClock, FiInfo } from "react-icons/fi";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

import Sidebar from '../../components/Sidebar';
import MapIcon from '../../utils/mapIcon';

interface Orphanage {
    name: string; 
    latitude: number;
    longitude: number; 
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
    images: Array<{
      id: number;
      url: string;
    }>
  }
  interface OrphanageParams {
    id: string;
  }

export default function Orphanage() {

    const params = useParams<OrphanageParams>();
    const [orphanage, setOrphanage] = useState<Orphanage>( );
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    return (
        <div className="page-orphanage">
      
            <Sidebar />

            <main>
                <div className="orphanage-details">
                <img src="" alt="" />

                <div className="images">
                    {/* orphanage.images.map((image, idx) => {
                    return (
                        <button 
                        key={image.id} 
                        className={activeImageIndex === idx ? "active" : ""} 
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        >
                        <img src={image.url} alt={orphanage.name} />
                        </button>
                    );
                    }) */}
                </div>
                
                <div className="orphanage-details-content">
                    <h1>{orphanage?.name}</h1>
                    <p>{orphanage?.about}</p>

                    <div className="map-container">
                        <MapContainer 
                            center={[-20.4648844, -54.6452804]} 
                            zoom={16} 
                            style={{ width: '100%', height: 280 }}
                            dragging={false}
                            touchZoom={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false} 
                        >
                            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> 
                            
                            <Marker interactive={false} icon={MapIcon} position={[-20.4648844, -54.6452804]} />
                            
                        </MapContainer>

                        <footer>
                            {/* <a href="https://www.google.com/maps/dir/?api=1&origin=34.1030032,-118.41046840000001&destination=34.059808,-118.368152">Ver rotas no Google Maps</a> }
                            <a target="_blank" rel='noopener noreferrer' href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
                            { */ }
                        </footer>
                    </div>

                    <hr />

                    <h2>Instruções para visita</h2>
                    <p>{/*orphanage.instructions*/}</p>

                    <div className="open-details">
                    <div className="hour">
                        <FiClock size={32} color="#15B6D6" />
                        Segunda à Sexta <br />
                        {/*orphanage.opening_hours*/}
                    </div>

                    {/*orphanage.open_on_weekends ? (
                        <div className="open-on-weekends">
                        <FiInfo size={32} color="#39CC83" />
                        Atendemos <br />
                        fim de semana
                        </div>
                    ) : (
                        <div className="open-on-weekends dont-open">
                        <FiInfo size={32} color="#FF669D" />
                        Não Atendemos <br />
                        fim de semana
                        </div>
                    )*/}
                    
                    </div>
                    
                </div>
                </div>
            </main>
            </div>
    );
}