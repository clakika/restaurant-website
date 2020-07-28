import React, { Component } from 'react';
import './Services.css'

import serviceImgOne from '../../img/services-image1.png';
import serviceImgTwo from '../../img/services-image2.png';



export class Services extends Component {
    render() {
        return (
            <div>
                <div className="Services_Container">
                    <div className="Services_Text">
                        <h2 className="Services_Title">enjoy your pizza wherever you want</h2>
                        <p className="Services_Subtext">visit our cozy restaurant in the heart of Berlin, or simply take your pizza to your most special places.
                        <br></br><a className="Services_Link" href="#">Discover our take-away and delivery services</a></p>
                    </div>
                    <img className="Services_Image Services_ImageOne" src={serviceImgOne}></img>
                    <img className="Services_Image Services_ImageTwo" src={serviceImgTwo}></img>
                </div>
            </div>
        )
    }
}

export default Services
