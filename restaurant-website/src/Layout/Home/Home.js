import React, { Component } from 'react';
import './Home.css';

import logo from '../../img/logo.svg';
import headerImage from '../../img/header-img.png';

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="Navigation">
                    <img src={logo} 
                         className="NavigationLogo"></img>
                    <ul className="NavList">
                        <li className="NavList_Item"><a href="#">home</a></li>
                        <li className="NavList_Item"><a href="#">reservation</a></li>
                        <li className="NavList_Item"><a href="#">services</a></li>
                        <li className="NavList_Item"><a href="#">contacts</a></li>
                    </ul>
                </div>
                <div className="Header">
                    <h1 className="Header_Title">Amore per la pizza</h1>
                    <img className="Header_Image"
                         src={headerImage}></img>
                </div>
            </div>
        )
    }
}

export default Home
