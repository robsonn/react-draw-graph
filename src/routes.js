import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Header'
import Graph1 from './pages/page1'
import Graph2 from './pages/page2'



const Routes = () => (    
    <BrowserRouter> 
        <Navbar/>       
            <Switch>
                <Route exact={true} path="/graph1" component={Graph1} />
                <Route exact={true} path="/graph2" component={Graph2} />
            </Switch>            
    </BrowserRouter>
)

export default Routes;