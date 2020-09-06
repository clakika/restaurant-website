import React, { Component } from 'react';
import './Home.css';
import Reservation from '../Reservation/Reservation';
import Services from '../Services/Services';
import Contacts from '../Contacts/Contacts';

import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';

import logo from '../../img/logo.svg';
import headerImage from '../../img/header-img.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faAt, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';


export class Home extends Component {
    render() {

        return (
            <Router>
            <div className="Home" id='home'>
                <div className="Navigation">
                    <img src={logo} 
                         className="NavigationLogo"></img>

                        <ul className="NavList">
                        <Link
                            className="NavList_Item"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >home</Link>

                        <Link
                            className="NavList_Item"
                            activeClass="active"
                            to="reservation"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >reservation</Link>

                        <Link
                            className="NavList_Item"
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >services</Link>

                        <Link
                            className="NavList_Item"
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            >contacts</Link>

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
            </Router>
        )
    }
}

export default Home
