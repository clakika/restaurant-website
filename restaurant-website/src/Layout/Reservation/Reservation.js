import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import { BrowserRouter as Router } from 'react-router-dom';

import ReservationImage from '../../img/reservation-image.jpg';
import './Reservation.css';

export class Reservation extends Component {

    render() {

        return (
            <Router>
                <div>
                    <div className="Reservation" id='reservation'>
                        <h2 className="Reservation_Title">visit Italy through your palate</h2>
                        <p className="Reservation_SubText">our authentic Italian pizzas are homemade and created with a lot of love.
                            let yourself to pleasure:</p>
                        <hr className="LineDivider"></hr>
                        <Form />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Reservation;
