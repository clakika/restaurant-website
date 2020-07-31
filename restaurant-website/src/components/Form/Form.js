import React, { Component } from 'react';
import './Form.css';

const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach( val => 
        {val.length > 0 && (valid = false)});

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
    
    return valid;
};


export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            firstName: "",
            lastName: "",
            date: "",
            time: "",
            partySize: 0,
            email: "",
            phoneNumber: "",
            notes: "",
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""},
            BookingMessage: {
                fontSize: '17px',
                marginTop: '2rem',
                display: 'none'}
    }
};

    
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        /*this.setState({
            [e.target.name]: e.target.value
        });*/
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3  ? "minimum 3 characters required" : "✓";
                break;

            case 'lastName':
                formErrors.lastName = value.length < 3 ? "minimum 3 characters required" : "✓";
                break;

            case 'email':
                formErrors.email = emailRegex.test(value) ? "✓" : "invalid email address";
                break;

            case 'phoneNumber':
                formErrors.phoneNumber = value.length < 15 ? "only numbers required" : "✓";
                break;
            default:
            break;
        }

        this.setState({ formErrors, [name]: value}, () => console.log(this.state));
    };

    isValid = () => {
        if(this.state.firstName.length == 0) {
            return false;
        }
        if(this.state.lastName.length == 0) {
            return false;
        }
        if(this.state.date.length == 0) {
            return false;
        }
        if(this.state.time.length == 0) {
            return false;
        }
        if(this.state.partySize == 0) {
            return false;
        }
        if(this.state.phoneNumber.length == 0){
            return false;
        }

        return true;
    }

    ValueChecker = () => {
            this.setState({
                disabled: ! this.isValid()
            }); 
        }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    onClick = (e) => {
        e.preventDefault(); 

        let BookingMessage = this.state.BookingMessage;

        this.setState({
            BookingMessage: {
                ...BookingMessage,
                display: 'block'
            }
        });
    }

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <form className="Reservation_Form" onSubmit={this.handleSubmit} onFocus={this.ValueChecker} noValidate>
                <label>first name<span className="Asteriks">*</span></label>
                <input 
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    type="text" 
                    name="firstName"
                    noValidate 
                    onChange={this.handleChange} 
                     />
                     {formErrors.firstName.length > 0 && (
                    <span className="errorMessageFirstName">{formErrors.email}</span>
                    )}
                <br />
                <label>last name<span className="Asteriks">*</span></label>
                <input 
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    type="text" 
                    name="lastName"
                    noValidate
                    onChange={this.handleChange} 
                     />
                     {formErrors.lastName.length > 0 && (
                    <span className="errorMessageLastName">{formErrors.email}</span>
                    )}
                <br />
                <label>date<span className="Asteriks">*</span></label>
                <input 
                    type="date" 
                    name="date"
                    noValidate
                    onChange={this.handleChange} 
                     />
                <br />
                <label>time<span className="Asteriks">*</span></label>
                <input 
                    type="time" 
                    name="time"
                    noValidate
                    onChange={this.handleChange} 
                    />
                <br />
                <label>party size<span className="Asteriks">*</span></label>
                <input 
                    type="number" 
                    min="1" 
                    max="30" 
                    name="partySize"
                    noValidate 
                    onChange={this.handleChange} 
                     />
                <br />
                <label>email</label>
                <input 
                    type="email" 
                    name="email"
                    noValidate
                    className={formErrors.email.length > 0 ? "error" : null}
                    onChange={this.handleChange} 
                    />
                    {formErrors.email.length > 0 && (
                    <span className="errorMessageEmail">{formErrors.email}</span>
                    )}
                <br />  
                <label>phone number<span className="Asteriks">*</span></label>
                <input 
                    type="tel" 
                    name="phoneNumber"
                    noValidate
                    className={formErrors.phoneNumber.length > 0 ? "error" : null}
                    onChange={this.handleChange} 
                    />
                    {formErrors.phoneNumber.length > 0 && (
                    <span className="errorMessagePhoneNumber">{formErrors.email}</span>
                    )}
                <br />
                <label>notes on reservation</label>
                <textarea 
                    type="text" 
                    name="notes"  
                    noValidate
                    onChange={this.handleChange} />
                <br />
                <button type="button" className="BookBtn" disabled={this.state.disabled}>book</button>
            </form> 
            <div className={this.state.BookingMessage}>
                    <p>Thank you for your reservation! See you soon!</p> 
            </div>
        </div>
        )
    };
}

export default Form;
