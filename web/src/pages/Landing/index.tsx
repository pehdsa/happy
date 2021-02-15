import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import Logo from '../../assets/images/logo.svg';
import '../../styles/css/landing.css';

const CompLanding: React.FC = () => {
    return (
        <div className="landing">
            <div className="content-wrapper">
                
                <img src={ Logo } alt="" />

                <main>
                    <h1>Leve Felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>    

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={ 26 } color="rgba(0, 0, 0, 0.6)" />
                </Link> 
                
            </div>
            <div className="location">
                <strong>Campo Grande</strong>
                <span>Mato Grosso do Sul</span>
            </div>
        </div>
    );
}

export default CompLanding;