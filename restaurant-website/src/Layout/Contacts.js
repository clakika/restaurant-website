import React, { Component } from 'react'

import contactsImage from '../img/contacts-image.png';

export class Contacts extends Component {
    render() {
        return (
            <div>
                <h2>share the love for pizza</h2>
                <div>
                    <p>we are on all social media platforms!visit our socials and share your experience!</p>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <i>O</i>
                    <h4>any questions?</h4>
                    <p><i>O</i>amoreperlapizza@italia.it</p>
                    <p><i>O</i>+123 456 789</p>
                </div>
                <img src={contactsImage}></img>
                <footer> &copy; 2020 Claudia Kiril Cappai</footer>
            </div>
        )
    }
}

export default Contacts
