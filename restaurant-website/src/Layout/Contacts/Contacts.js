import React, { Component } from 'react';
import './Contacts.css';

import contactsImage from '../../img/contacts-image.png';

export class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <h2 className="Contacts_Title">share the love for pizza</h2>
                <img className="Contacts_Image" src={contactsImage}></img>
                <div className="Contacts_Socials">
                    <p className="Contacts_SubText">we are on all social media platforms!<br></br>visit our socials and share your experience!</p>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <h4 className="Contacts_Questions">any questions?</h4>
                    <p><i>O</i>amoreperlapizza@italia.it</p>
                    <p><i>O</i>+123 456 789</p>
                    <i className="Map_Icon">O</i><iframe className="Restaurant_Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6327701190617!2d13.41111195129006!3d52.52198464373556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f40519cdb%3A0xb071e6aa2e903088!2sAlexanderplatz!5e0!3m2!1sit!2sde!4v1596010957566!5m2!1sit!2sde" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
                <footer className="Copyright"> &copy; 2020 Claudia Kiril Cappai</footer>
            </div>
        )
    }
}

export default Contacts
