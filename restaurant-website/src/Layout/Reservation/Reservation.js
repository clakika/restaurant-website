import React, { Component } from 'react';

import ReservationImage from '../../img/reservation-image.png';
import './Reservation.css';

export class Reservation extends Component {
    render() {

        return (
            <div>
                <div className="Reservation">
                    <div className="Reservation_LeftSection">
                        <img src={ReservationImage}
                             className="Reservation_Image"></img>
                    </div>
                    <div className="Reservation_RightSection">
                        <h2 className="Reservation_Title">visit Italy through your palate</h2>
                        <p className="Reservation_SubText">our authentic Italian pizzas are homemade and created with a lot of love.
                            let yourself to pleasure:</p>
                        <form className="Reservation_Form">
                            <div className="FormLeft">
                                <label>first name*</label>
                                <input type="text" name="first-name"></input>

                                <label>date*</label>
                                <input type="text" name="date"></input>

                                <label>party size*</label>
                                <input type="text" name="party-size"></input>
                            </div>
                            
                            <div className="FormRight">
                                <label>last name*</label>
                                <input type="text" name="last-name"></input>
                            
                                <label>time*</label>
                                <input type="text" name="time"></input>

                                <label>email*</label>
                                <input type="text" name="email"></input>
                            </div>

                            <label>notes on reservation</label>
                            <textarea type="text" name="notes" ></textarea>
                            
                            <button className="BookBtn">book</button>
                
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation
