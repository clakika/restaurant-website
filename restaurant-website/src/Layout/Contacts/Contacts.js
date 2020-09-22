import React, { Component } from 'react';
import './Contacts.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPinterest, faTwitter, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAt} from '@fortawesome/free-solid-svg-icons';


import contactsImage from '../../img/contacts-image.png';

export class Contacts extends Component {
    render() {
        return (
            <Router>
                <div className="Contacts" id='contacts'>
                    <div className="Contacts_TitleContainer">
                        <h2 className="Contacts_Title">share the love for pizza</h2>
                        <img className="Contacts_Image" src={contactsImage}></img>
                    </div>
                    <div className="Contacts_Socials">
                        <p className="Contacts_SubText">we are on all social media platforms!<br></br>visit our socials and share your experience!</p>
                        <FontAwesomeIcon icon={faInstagram} className="Contact_Icon Contact_IconSocials"/>
                        <FontAwesomeIcon icon={faFacebookSquare} className="Contact_Icon Contact_IconSocials"/>
                        <FontAwesomeIcon icon={faPinterest} className="Contact_Icon Contact_IconSocials"/>
                        <FontAwesomeIcon icon={faTwitter} className="Contact_Icon Contact_IconSocials"/>
                    </div>
                    <div className="Contacts_Questions">
                        <h4 className="Contacts_QuestionsText">any questions?</h4>
                        <p className="Contacts_Items"><FontAwesomeIcon icon={faAt} className="Contact_Icon"/>amoreperlapizza@italia.it</p>
                        <p className="Contacts_Items"><FontAwesomeIcon icon={faPhone} className="Contact_Icon"/>+123 456 789</p>
                        <iframe className="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6327701190617!2d13.41111195129006!3d52.52198464373556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f40519cdb%3A0xb071e6aa2e903088!2sAlexanderplatz!5e0!3m2!1sit!2sde!4v1596010957566!5m2!1sit!2sde" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default Contacts
