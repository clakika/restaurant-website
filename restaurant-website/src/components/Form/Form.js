import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './Form.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation} from '@fortawesome/free-solid-svg-icons';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false,
            surname: false,
            phoneNumber: false,
            email: false,
            partySize: false,
            date: false,
            time: false,
            startDate: new Date()
        };
    }

    handleChange = date => {
        this.setState({
          startDate: date
        });
        this.DateValidator();
      };

      DateValidator = () => {
        const errorDate = document.querySelector(".ErrorDate");
        const date = document.querySelector(".InputDate");
        

        if (date.value.length == "") {
            errorDate.classList.add("error");
            this.setState({date: false})
        }
        else {
            errorDate.classList.remove("error");
            this.setState({date: true})
        }
        }


    render() {
        
        return (
            <div className="FormBox">
                <p className="RequiredFields">Fields with <span className="Asteriks">*</span> are required</p>
                <form className="Reservation_Form" onChange={() => {
                    const button = document.querySelector(".BookBtn");
                    const messageBooked = document.querySelector(".BookingMessage");

                    if(this.state.name == true && this.state.surname == true && this.state.phoneNumber == true && this.state.email == true && this.state.date == true) {
                        button.classList.add("enable");
                        messageBooked.classList.add("enable");
                    } else {
                        button.classList.remove("enable");
                        messageBooked.classList.remove("enable");
                    }
                    
                }}>
                    <label>first name<span className="Asteriks">*</span></label>
                    <input
                        className="input InputName"
                        type="text"
                        name="firstName"
                        onChange={() => {
                            const errorName = document.querySelector(".ErrorName");
                            const errorIcon = document.querySelector(".ErrorIconName");
                            const name = document.querySelector(".InputName");

                            if (name.value.length <= 2) {
                                errorName.classList.add("error");
                                errorIcon.classList.add("error");
                                this.setState({name: false});
                            }
                            else {
                                errorName.classList.remove("error");
                                errorIcon.classList.remove("error");
                                this.setState({name: true});
                            }

                            console.log(this.state.name);
                        }}
                        required
                    />
                    <p className="ErrorName Error">Name must be at least 2 characters long</p>
                    <FontAwesomeIcon className="ErrorIconName ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>surname<span className="Asteriks">*</span></label>
                    <input
                        className="input InputSurname"
                        type="text"
                        name="surname"
                        onChange={() => {
                            const errorSurname = document.querySelector(".ErrorSurname");
                            const errorIcon = document.querySelector(".ErrorIconSurname");
                            const surname = document.querySelector(".InputSurname");

                            if (surname.value.length <= 2) {
                                errorSurname.classList.add("error");
                                errorIcon.classList.add("error");
                                this.setState({surname: false})
                            }
                            else {
                                errorSurname.classList.remove("error");
                                errorIcon.classList.remove("error");
                                this.setState({surname: true})
                            }

                            console.log(this.state.surname);
                        }}
                        required
                    />
                    <p className="ErrorSurname Error">Surname must be at least 2 characters long</p>
                    <FontAwesomeIcon className="ErrorIconSurname ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>date<span className="Asteriks">*</span></label>
                    <DatePicker 
                        className="input InputDate"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        required
                    />
                    <p className="ErrorDate Error">Please select a date</p>
                    {/*<input
                        className="InputDate"
                        type="date"
                        name="date"
                        onFocus={() => {
                            const errorDate = document.querySelector(".ErrorDate");
                            const date = document.querySelector(".InputDate");

                            if (date.value == " ") {
                                errorDate.classList.add("error");
                                this.setState({date: false})
                            } 
                            else {
                                errorDate.classList.remove("error");
                                this.setState({date: true})
                            }

                        }}
                        required
                    />*/}
                    <p className="ErrorDate Error">Please select a date</p>
                    <FontAwesomeIcon className="ErrorIconDate ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>time<span className="Asteriks">*</span></label>
                    <input
                        className="input InputTime"
                        type="time"
                        name="time"
                        min="12:00" 
                        max="23:00"
                        required
                        onChange={() => {
                            const errorTime = document.querySelector(".ErrorTime");
                            const errorIcon = document.querySelector(".ErrorIconTime");
                            const time = document.querySelector(".InputTime");

                            if (time.value == 0) {
                                errorTime.classList.add("error");
                                errorIcon.classList.add("error");
                                this.setState({time: false})
                            }
                            else {
                                errorTime.classList.remove("error");
                                errorIcon.classList.remove("error");
                                this.setState({time: true})
                            }

                            console.log(this.state.surname);
                        }}
                    />
                    <p className="ErrorTime Error">Please select a time</p>
                    <FontAwesomeIcon className="ErrorIconTime ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>party size<span className="Asteriks">*</span></label>
                    <input
                        className="input InputSize"
                        type="number"
                        min="1"
                        max="30"
                        name="partySize"
                        required
                    />
                    <br />
                    <p className="ErrorSize Error">Minimum party size is 1</p>
                    <label>email<span className="Asteriks">*</span></label>
                    <input
                        className="input InputEmail"
                        type="email"
                        name="email"
                        onChange={() => {
                            const errorEmail = document.querySelector(".ErrorEmail");
                            const errorIcon = document.querySelector(".ErrorIconEmail");
                            const button = document.querySelector(".BookBtn");
                            const email = document.querySelector(".InputEmail");
                            const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                            if (regx.test(email.value) == false) {
                                errorEmail.classList.add("error");
                                errorIcon.classList.add("error");
                                this.setState({email: false})
                            }
                            else {
                                errorEmail.classList.remove("error");
                                errorIcon.classList.add("error");
                                this.setState({email: true})
                            }
                        }}
                        required
                    />
                    <p className="ErrorEmail Error">This field must contain a @</p>
                    <FontAwesomeIcon className="ErrorIconEmail ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>phone number<span className="Asteriks">*</span></label>
                    <input
                        className="input InputNumber"
                        type="tel"
                        name="phoneNumber"
                        onChange={() => {
                            const button = document.querySelector(".BookBtn");
                            const errorNumber = document.querySelector(".ErrorNumber");
                            const errorIcon = document.querySelector(".ErrorIconNumber");
                            const number = document.querySelector(".InputNumber");
                            const regex = /[0-9]|\./;

                            if (regex.test(number.value) == false) {
                                errorNumber.classList.add("error");
                                errorIcon.classList.add("error");
                                this.setState({phoneNumber: false})
                            }
                            else {
                                errorNumber.classList.remove("error");
                                errorIcon.classList.add("error");
                                this.setState({phoneNumber: true})
                            }
                        }
                    }
                        required
                    />
                    <p className="ErrorNumber Error">This field must contain only numeric values</p>
                    <FontAwesomeIcon className="ErrorIconNumber ErrorIcon" icon={faExclamation} />
                    <br />
                    <label>notes on reservation</label>
                    <textarea
                        type="text"
                        name="notes"
                        onChange={this.handleChange} />
                    <br />
                </form>
                <button
                    type="button"
                    className="BookBtn"
                    onClick={() => {
                        const booked = document.querySelector(".BookingMessage");
                        booked.classList.toggle("open");
                    }}
                    >book</button>
                    <div className="BookingMessage Message">
                    <p>Thank you for your reservation! See you soon!</p>
                </div>
            </div>
        )
    };
}

export default Form;
