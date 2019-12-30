import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";


/**
* Componente que desenha o menu de navegacao
*/
export default class Header extends Component {
    render() {                
        return (
            <div>
            <nav className="navbar-left">
                <div><span className="navbar-title">Semantix</span></div>
                <div className="navbar-link">
                    <NavLink activeClassName="navbar-link--active" className="nav-link" to="/graph1/">Page 1</NavLink>
                </div>
                <div className="navbar-link">
                    <NavLink activeClassName="navbar-link--active" className="nav-link" to="/graph2">Page 2</NavLink>
                </div>
            </nav>
            </div>
        )
    }
}