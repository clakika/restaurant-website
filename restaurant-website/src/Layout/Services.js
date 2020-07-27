import React, { Component } from 'react';

import serviceImgOne from '../img/services-image1.png';
import serviceImgTwo from '../img/services-image2.png';


export class Services extends Component {
    render() {
        return (
            <div>
                <h2>enjoy your pizza wherever you want</h2>
                <p>visit our cozy restaurant in the heart of Berlin, or simply take your pizza to your most special places.
                <a href="#">Discover our take-away and delivery services</a></p>
                <img src={serviceImgOne}></img>
                <img src={serviceImgTwo}></img>
            </div>
        )
    }
}

export default Services
