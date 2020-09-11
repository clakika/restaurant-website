import React, { Component } from 'react';
import './Form.css';


/*const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);*/

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false,
            surname: false,
            phoneNumber: false,
            email: false
        };
        this.isValid = this.isValid.bind(this);
    }

    
    isValid = () => {
        this.state.name && this.state.surname && this.state.phoneNumber && this.state.email ? true : false
    }

    render() {

        return (
            <div className="FormBox">
                <form className="Reservation_Form" onChange={() => {
                    if(this.isValid == true) {
                        console.log("This is valid");
                    } else {
                        console.log("This is not valid")
                    }
                }}>
                    <label>first name<span className="Asteriks">*</span></label>
                    <input
                        className="InputName"
                        type="text"
                        name="firstName"
                        onChange={() => {
                            const errorName = document.querySelector(".ErrorName");
                            const name = document.querySelector(".InputName");

                            if (name.value.length <= 2) {
                                errorName.classList.add("error");
                                this.setState({name: false});
                            }
                            else {
                                errorName.classList.remove("error");
                                this.setState({name: true});
                            }

                            console.log(this.state.name);
                        }}
                        required
                    />
                    <p className="ErrorName Error">Name must be at least 2 characters long</p>
                    <br />
                    <label>surname<span className="Asteriks">*</span></label>
                    <input
                        className="InputSurname"
                        type="text"
                        name="surname"
                        onChange={() => {
                            const button = document.querySelector(".BookBtn");
                            const errorSurname = document.querySelector(".ErrorSurname");
                            const surname = document.querySelector(".InputSurname");

                            if (surname.value.length <= 2) {
                                errorSurname.classList.add("error");
                                this.setState({surname: false})
                            }
                            else {
                                errorSurname.classList.remove("error");
                                this.setState({surname: true})
                            }

                            console.log(this.state.surname);
                        }}
                        required
                    />
                    <p className="ErrorSurname Error">Surname must be at least 2 characters long</p>
                    <br />
                    <label>date<span className="Asteriks">*</span></label>
                    <input
                        className="InputDate"
                        type="date"
                        name="date"
                        required
                    />
                    <br />
                    <label>time<span className="Asteriks">*</span></label>
                    <input
                        className="InputTime"
                        type="time"
                        name="time"
                        required
                    />
                    <br />
                    <label>party size<span className="Asteriks">*</span></label>
                    <input
                        className="InputSize"
                        type="number"
                        min="1"
                        max="30"
                        name="partySize"
                        required
                    />
                    <br />
                    <label>email<span className="Asteriks">*</span></label>
                    <input
                        className="InputEmail"
                        type="email"
                        name="email"
                        onChange={() => {
                            const errorEmail = document.querySelector(".ErrorEmail");
                            const button = document.querySelector(".BookBtn");
                            const email = document.querySelector(".InputEmail");
                            const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                            if (regx.test(email.value) == false) {
                                errorEmail.classList.add("error");
                                this.setState({email: false})
                            }
                            else {
                                errorEmail.classList.remove("error");
                                this.setState({email: true})
                            }

                            console.log(this.state.email);
                        }}
                        required
                    />
                    <p className="ErrorEmail Error">This field must contain a @</p>
                    <br />
                    <label>phone number<span className="Asteriks">*</span></label>
                    <input
                        className="InputNumber"
                        type="tel"
                        name="phoneNumber"
                        onChange={() => {
                            const button = document.querySelector(".BookBtn");
                            const errorNumber = document.querySelector(".ErrorNumber");
                            const number = document.querySelector(".InputNumber");
                            const regex = /[0-9]|\./;

                            if (regex.test(number.value) == false) {
                                errorNumber.classList.add("error");
                                this.setState({phoneNumber: false})
                            }
                            else {
                                errorNumber.classList.remove("error");
                                this.setState({phoneNumber: true})
                            }
                            console.log(this.state.phoneNumber);
                        }
                    }
                        required
                    />
                    <p className="ErrorNumber Error">This field must contain only numeric values</p>
                    <br />
                    <label>notes on reservation</label>
                    <textarea
                        type="text"
                        name="notes"
                        onChange={this.handleChange} />
                    <br />
                </form>
                <p className="RequiredFields">Fields with <span className="Asteriks">*</span> are required</p>
                <button
                    type="button"
                    className="BookBtn"
                    onClick={() => {
                        const booked = document.querySelector(".BookingMessage");
                        booked.classList.toggle("open");
                    }}
                    onChange={() => {
                        const button = document.querySelector(".BookBtn");
                        this.isValid ? button.classList.add("enable") : button.classList.remove("enable");
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
