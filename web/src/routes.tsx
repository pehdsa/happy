import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import './styles/css/base.css';

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ Home } />                
                    <Route path="/app" component={ OrphanagesMap } />
                </Switch>
            </BrowserRouter>
        </>
    );
}