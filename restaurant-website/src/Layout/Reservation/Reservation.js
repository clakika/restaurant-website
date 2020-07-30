import React, { Component } from 'react';
import Form from '../../components/Form/Form';

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
                            <hr className="Line"></hr>
                            <p className="RequiredFields">Fields with <span className="Asteriks">*</span> are required</p>
                            <Form />
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default Reservation;
