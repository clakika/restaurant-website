import React, { Component } from 'react';
import logo from '../img/logo.svg';
import headerImage from '../img/header-img.png';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="Navigation">
                    <img src={logo} 
                         className="Logo"></img>
                    <ul className="NavList">
                        <li className="NavList_Item">home</li>
                        <li className="NavList_Item">reservation</li>
                        <li className="NavList_Item">services</li>
                        <li className="NavList_Item">contacts</li>
                    </ul>
                    <h1>Amore per la pizza</h1>
                    <img src={headerImage}
                         className={headerImage}></img>
                </div>
            </div>
        )
    }
}

export default Home
