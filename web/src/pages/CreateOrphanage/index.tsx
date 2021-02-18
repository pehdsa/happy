import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';
import MapIcon from '../../utils/mapIcon';

const CreateOrphanage: React.FC = () => {

    function handlerSubmit() {

    }

    function handlerSelectImage() {

    }

    return (
        <div className="page-create-orphanage">
      
            <Sidebar />

            <main>
                <form onSubmit={handlerSubmit} className="create-orphanage-form">
                <fieldset>
                    <legend>Dados</legend>

                    <MapContainer 
                    center={[-20.4648844, -54.6452804]} 
                    style={{ width: '100%', height: 280 }}
                    zoom={15}
                    //onclick={handlerMapClick}
                    >
                        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                        <Marker interactive={false} icon={MapIcon} position={[-20.4648844, -54.6452804]} />

                    </MapContainer>

                    <div className="input-block">
                    <label htmlFor="name">Nome</label>
                    <input 
                        id="name"
                        //value={name}
                        //onChange={event => setName(event.target.value)}
                    />
                    </div>

                    <div className="input-block">
                    <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
                    <textarea 
                        id="about" 
                        maxLength={300} 
                        //value={about}
                        //onChange={event => setAbout(event.target.value)}
                    />
                    </div>

                    {/* Upload de images */}
                    <div className="input-block">
                    <label htmlFor="images">Fotos</label>

                    <div className="images-container">
                        {/* fazer um Preview das imagens /}
                        {previewImage.map((image, idx) => {
                        return (
                            <div key={image} className='content-image'>
                            <img src={image} alt={name} />
                            <button 
                                onClick={()=> handleDeleteImage(idx)}
                                className="delete-img" 
                                type="button">
                                X
                            </button>
                            </div>
                        )
                        })*/}

                        <label htmlFor='image[]' className="new-image">
                        <FiPlus size={24} color="#15b6d6" />
                        </label>
                    </div>
                    
                    <input multiple onChange={handlerSelectImage} type="file" id="image[]" />
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Visitação</legend>

                    <div className="input-block">
                    <label htmlFor="instructions">Instruções</label>
                    <textarea 
                        id="instructions" 
                        //value={instructions}
                        //onChange={event => setInstructions(event.target.value)}
                    />
                    </div>

                    <div className="input-block">
                    <label htmlFor="opening_hours">Horário de funcionamento</label>
                    <input 
                        id="opening_hours" 
                        //value={opening_hours}
                        //onChange={event => setOpening_hours(event.target.value)}
                    />
                    </div>

                    <div className="input-block">
                    <label htmlFor="open_on_weekends">Atende fim de semana</label>

                    <div className="button-select">
                        <button 
                        type="button" 
                        //className={open_on_weekends ? "active" : ""}
                        //onClick={()=> setOpen_on_weekends(true)}
                        >
                            Sim
                        </button>
                        
                        <button 
                        type="button"
                        //className={!open_on_weekends ? "active" : ""}
                        //onClick={()=> setOpen_on_weekends(false)}
                        >
                            Não
                        </button>

                    </div>
                    </div>
                </fieldset>

                <button className="confirm-button" type="submit">
                    Confirmar
                </button>
                </form>
            </main>
        </div>
    );
}

export default CreateOrphanage;