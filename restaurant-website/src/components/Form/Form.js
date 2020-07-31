import React, { Component } from 'react';
import './Form.css';


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
            notes: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.isValid = this.isValid.bind(this);
        this.ValueChecker = this.ValueChecker.bind(this);
    };

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
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
    }

    render() {
        return (
            <div>
                <div className="BookingMessage">
                    <p>Thank you for your reservation! See you soon!</p>
                </div>
                <form className="Reservation_Form" onSubmit={this.handleSubmit} onFocus={this.ValueChecker}>
                <label>first name<span className="Asteriks">*</span></label>
                <input 
                    type="text" 
                    name="firstName"
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                     />
                <br />
                <label>last name<span className="Asteriks">*</span></label>
                <input 
                    type="text" 
                    name="lastName"
                    value={this.state.lastName} 
                    onChange={this.handleChange} 
                     />
                <br />
                <label>date<span className="Asteriks">*</span></label>
                <input 
                    type="date" 
                    name="date"
                    value={this.state.date} 
                    onChange={this.handleChange} 
                     />
                <br />
                <label>time<span className="Asteriks">*</span></label>
                <input 
                    type="time" 
                    name="time"
                    value={this.state.time} 
                    onChange={this.handleChange} 
                    />
                <br />
                <label>party size<span className="Asteriks">*</span></label>
                <input 
                    type="number" 
                    min="1" 
                    max="30" 
                    name="partySize"
                    value={this.state.partySize} 
                    onChange={this.handleChange} 
                     />
                <br />
                <label>email</label>
                <input 
                    type="email" 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleChange} />
                <br />  
                <label>phone number<span className="Asteriks">*</span></label>
                <input 
                    type="tel" 
                    name="phoneNumber"
                    value={this.state.phoneNumber} 
                    onChange={this.handleChange} 
                    />
                <br />
                <label>notes on reservation</label>
                <textarea 
                    type="text" 
                    name="notes"  
                    value={this.state.notes}
                    onChange={this.handleChange} />
                <br />
                <button type="button" className="BookBtn" disabled={this.state.disabled}>book</button>
            </form> 
            </div>
        )
    };
}

export default Form;
