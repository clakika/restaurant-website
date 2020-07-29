import React, { Component } from 'react';

import ReservationImage from '../../img/reservation-image.png';
import './Reservation.css';

export class Reservation extends Component {
    
    onClick = (e) => {
        e.preventDefault()
        console.log('onclick..')
    }

    render() {

        return (
            <div>
                <div className={"OverlayMessageBooking" + (this.props.clicked ? '-none' : '-visible')}></div>
                <div className="BookedMessage">
                        <p className="BookedMessage_Text">Thank you for your reservation!<br></br>Shortly you will receive a confirmation email.<br></br>See you soon! :)</p>
                </div>
                <div className="Reservation">
                    <div className="Reservation_LeftSection">
                        <img src={ReservationImage}
                             className="Reservation_Image"></img>
                    </div>
                    <div className="Reservation_RightSection">
                        <h2 className="Reservation_Title">visit Italy through your palate</h2>
                        <p className="Reservation_SubText">our authentic Italian pizzas are homemade and created with a lot of love.
                            let yourself to pleasure:</p>
                            <hr className="Line"></hr>
                            <p className="RequiredFields">Fields with <span className="Asteriks">*</span> are required</p>
                        <form className="Reservation_Form">
                            <div className="FormLeft">
                                <label>first name<span className="Asteriks">*</span></label>
                                <input type="text" name="first-name" required></input>

                                <label>date<span className="Asteriks">*</span></label>
                                <input type="date" name="date" required></input>

                                <label>party size<span className="Asteriks">*</span></label>
                                <input type="number" min="1" max="30" name="party-size" required></input>
                            </div>
                            
                            <div className="FormRight">
                                <label>last name<span className="Asteriks">*</span></label>
                                <input type="text" name="last-name" required></input>
                            
                                <label>time<span className="Asteriks">*</span></label>
                                <input type="time" name="time" required></input>

                                <label>email<span className="Asteriks">*</span></label>
                                <input type="email" name="email" required></input>
                            </div>

                            <div className="Reservation_Notes">
                                <label>notes on reservation</label>
                                <textarea type="text" name="notes"></textarea>
                            </div>
                            <button className="BookBtn"><a href="#" onClick={this.onClick}>book</a></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation
