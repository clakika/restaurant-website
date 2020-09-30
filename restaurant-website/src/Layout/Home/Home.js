import React, { Component } from 'react';
import './Home.css';

import { BrowserRouter as Router } from 'react-router-dom';

import headerImage from '../../img/header-img.png';


export class Home extends Component {
    render() {

        return (
            <Router>
                <div className="Home" id="home">
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
