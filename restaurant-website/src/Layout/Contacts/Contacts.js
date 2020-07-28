import React, { Component } from 'react';
import './Contacts.css';

import contactsImage from '../../img/contacts-image.png';

export class Contacts extends Component {
    render() {
        return (
            <div className="Contacts_Section">
                <h2 className="Contacts_Title">share the love for pizza</h2>
                <img className="Contacts_Image" src={contactsImage}></img>
                <div className="Contacts_Socials">
                    <p className="Contacts_SubText">we are on all social media platforms!<br></br>visit our socials and share your experience!</p>
                    <i className="fab fa-instagram"></i>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <h4 className="Contacts_Questions">any questions?</h4>
                    <p><i>O</i>amoreperlapizza@italia.it</p>
                    <p><i>O</i>+123 456 789</p>
                </div>
                <footer className="Copyright"> &copy; 2020 Claudia Kiril Cappai</footer>
            </div>
        )
    }
}

export default Contacts
