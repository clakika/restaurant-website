import React, { Component } from 'react';
import logo from '../../img/logo.svg';

import './Navigation.css';

import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faAt, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';

export class Navigation extends Component {
    render() {

        window.addEventListener('scroll', (event) => {
            let nav = document.querySelector(".NavBar");
            let windowPosition = window.scrollY > 0;

            nav.classList.toggle("scrolling-active", windowPosition);

            event.preventDefault();
        });
    
        return (
            <Router>
                <div className="NavBar">
                    <div className="Navigation">
                        <img src={logo}
                            className="NavigationLogo"></img>

                        <ul className="NavList">
                            <div className="DropDownBar"></div>
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

                            <a href="#"><FontAwesomeIcon icon={faPhone} className="Nav_Icon"/></a>
                            <a href="#"><FontAwesomeIcon icon={faAt} className="Nav_Icon"/></a>
                            <a href="#"><FontAwesomeIcon icon={faMapMarkedAlt} className="Nav_Icon"/></a>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;