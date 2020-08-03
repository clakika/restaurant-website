import React, { Component } from 'react';
import './Form.css';
import Dialog from '../../components/DialogMessage/Dialog';


/*const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);*/

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            visible: false,
            firstName: "",
            lastName: "",
            date: "",
            time: "",
            partySize: 0,
            email: "",
            phoneNumber: "",
            notes: ""
    }
};

    
    handleChange = e => {
        e.preventDefault();
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

        this.setState({ BookingMessage: { ...this.state.BookingMessage, display: "block"} });
    }

    render() {

        return (
            <div>
                <form className="Reservation_Form" onSubmit={this.handleSubmit} onFocus={this.ValueChecker}>
                <label>first name<span className="Asteriks">*</span></label>
                <input 
                    type="text" 
                    name="firstName" 
                    onChange={this.handleChange} 
                    required
                     />
                <br />
                <label>last name<span className="Asteriks">*</span></label>
                <input 
                    type="text" 
                    name="lastName"
                    onChange={this.handleChange}
                    required 
                     />
                <br />
                <label>date<span className="Asteriks">*</span></label>
                <input 
                    type="date" 
                    name="date"
                    onChange={this.handleChange} 
                    required
                     />
                <br />
                <label>time<span className="Asteriks">*</span></label>
                <input 
                    type="time" 
                    name="time"
                    onChange={this.handleChange} 
                    required
                    />
                <br />
                <label>party size<span className="Asteriks">*</span></label>
                <input 
                    type="number" 
                    min="1" 
                    max="30" 
                    name="partySize"
                    onChange={this.handleChange} 
                    required
                     />
                <br />
                <label>email</label>
                <input 
                    type="email" 
                    name="email"
                    onChange={this.handleChange} 
                    required
                    />
                <br />  
                <label>phone number<span className="Asteriks">*</span></label>
                <input 
                    type="tel" 
                    name="phoneNumber"
                    onChange={this.handleChange} 
                    required
                    />
                <br />
                <label>notes on reservation</label>
                <textarea 
                    type="text" 
                    name="notes"  
                    onChange={this.handleChange} />
                <br />
                <button type="button" className="BookBtn" onClick={() => {this.setState({visible: true});}} disabled={this.state.disabled}>book</button>
                {this.state.visible ? <Dialog /> : null}
            </form> 
        </div>
        )
    };
}

export default Form;
