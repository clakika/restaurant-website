import React, { Component } from 'react';
import './Home.css';

import logo from '../../img/logo.svg';
import headerImage from '../../img/header-img.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faAt, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';


export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Navigation">
                    <img src={logo} 
                         className="NavigationLogo"></img>
                    <ul className="NavList">
                        <li className="NavList_Item"><a href="#">home</a></li>
                        <li className="NavList_Item"><a href="#">reservation</a></li>
                        <li className="NavList_Item"><a href="#">services</a></li>
                        <li className="NavList_Item"><a href="#">contacts</a></li>

                        <a href="#"><FontAwesomeIcon icon={faPhone} className="Home_Icon"/></a>
                        <a href="#"><FontAwesomeIcon icon={faAt} className="Home_Icon"/></a>
                        <a href="#"><FontAwesomeIcon icon={faMapMarkedAlt} className="Home_Icon"/></a>
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
