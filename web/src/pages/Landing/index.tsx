import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

// import { Container } from './styles';

import Logo from '../../assets/images/logo.svg';
import Bg from '../../assets/images/Ilustra02.svg';

const Landing = styled.div`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    display: flex;
    justify-content: center;
    align-items: center;

    & .content-wrapper {  
        position: relative;
        width: 100%;
        max-width: 1100px;
        height: 100%;
        min-height: 674px;
        

        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background: url(${ Bg }) no-repeat 80% center;
    }

    & .content-wrapper img { 
        display: block;
        width: 100%;
        max-width: 240px;
        height: auto; 
        margin-bottom: 50px;
    }
    & .content-wrapper main { max-width: 350px; }
    & .content-wrapper h1 { 
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
    }
    & .content-wrapper p {
        margin-top: 40px;
        font-size: 24px;
        line-height: 34px;
    }

    & .content-wrapper .enter-app {
        position: absolute;
        right: 0;
        bottom: 0;

        width: 80px;
        height: 80px;

        background: #ff6;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;

        transition: background-color 0.2s;
    }

    & .content-wrapper .enter-app:hover {
        background: #96FEFF;
    }

    & .location { 
        position: absolute;
        top: 0; 
        right: 0; 
        font-size: 24px;
        line-height: 34px;
        text-align: right;
        display: flex;
        flex-direction: column;
        padding: 40px;
    }
    & .location strong { font-weight: 800; }
    & .location a { color: blue; }

    


`;

const CompLanding: React.FC = () => {
    return (
        <Landing>
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
        </Landing>
    );
}

export default CompLanding;