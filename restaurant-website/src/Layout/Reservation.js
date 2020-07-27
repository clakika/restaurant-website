import React, { Component } from 'react'

export class Reservation extends Component {
    render() {

        return (
            <div>
                <h2 className="">visit Italy through your palate</h2>
                <p>our authentic Italian pizzas are homemade and created with a lot of love.
                    let yourself to pleasure:</p>
                <form>
                    <label>
                        first name * 
                        <input type="text" name="first-name"></input>
                    </label>

                    <label>
                        last name *
                        <input type="text" name="last-name"></input>
                    </label>
                    <br></br>
                    <label>
                        date *
                        <input type="text" name="date"></input>
                    </label>

                    <label>
                         time *
                        <input type="text" name="time"></input>
                    </label>

                    <br></br>
                    <label>
                        party size *
                        <input type="text" name="party-size"></input>
                    </label>

                    <label>
                        email *
                        <input type="text" name="email"></input>
                    </label>

                    <br></br>
                    <label>
                        notes on reservation 
                        <input type="text" name="notes"></input>
                    </label>
                    <button>book</button>
                </form>
            </div>
        )
    }
}

export default Reservation
