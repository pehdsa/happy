import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import MapMarker from '../../assets/images/map-marker.svg';
import MapIcon from '../../utils/mapIcon';

interface Orphanage {
    id: number,
    name: string; 
    latitude: number;
    longitude: number; 
}
interface OrphanageParams {
    id: string;
}

function OrphanagesMap() {

    const [ orphanages, setOrphanages ] = useState<Orphanage[]>([]);
    
    useEffect(() => {
        api.get('/orphanages').then(resp => {
            setOrphanages(resp.data);
        })
    },[]);

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

                    { orphanages.map(orphanage => {
                        return (
                            <Marker 
                                key={ orphanage.id }
                                icon={ MapIcon }
                                position={[ orphanage.latitude, orphanage.longitude ]}
                            >
                                
                                <Popup closeButton={ false } minWidth={ 240 } maxWidth={ 240 } className="map-popup">
                                    { orphanage.name }
                                    <Link to={`/orphanage/${orphanage.id}`}>
                                        <FiArrowRight size={ 22 } color="#FFF" />
                                    </Link>
                                </Popup>

                            </Marker>
                        )
                    }) }

                </MapContainer> 

                <Link to="/orphanages/create" className="create-orphanage">
                    <FiPlus size={ 32 } color="#FFF" />
                </Link>

            </main>
        </div>
    );
}

export default OrphanagesMap;