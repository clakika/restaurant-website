import React, { Component } from 'react'

export class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }

        this.state = {
            OverlayMessageBooking: {
                opacity: '0.8',
                backgroundColor: '#ccc',
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                display: 'none',
            },

            BookedMessage: {
                backgroundColor: 'whitesmoke',
                opacity: '0.9',
                width: '30vw',
                height: '16vw',
                padding: '1.5rem',
                margin: '0 auto',
                position: 'absolute',
                transform: 'translate(15rem, 10rem)',
                border: '3px solid rgb(146, 43, 33)',
                display: 'none',
            }
        }

    };

    render() {
        return (
            <div>
                <div style={this.state.OverlayMessageBooking}></div>
                    <div style={this.state.BookedMessage}>
                        <p className="BookedMessage_Text">Thank you for your reservation!<br></br>Shortly you will receive a confirmation email.<br></br>See you soon! :)</p>
                </div>
            </div>
        )
    }
}

export default Dialog
