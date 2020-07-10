import React, { Component } from 'react';
import './Style.css';

class ContactUsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    }


    handlechangeall = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handlesubmit = (event) => {
        alert(` Your submission was successfully sent.
  `);
        // alert( JSON.stringify(this.state));
        console.log(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label> Name </label><br/>
                    <input type="text" name="name" value={this.state.name}
                           onChange={this.handlechangeall}/> <br/>

                    <label> Email </label><br/>
                    <input type="email" name="email" value={this.state.email}
                           onChange={this.handlechangeall}/> <br/>

                    <label> Mobile </label><br/>
                    <input type="number" name="phone" value={this.state.phone}
                           onChange={this.handlechangeall}/> <br/>

                    <label> Message </label>
                    <textarea value={this.state.message} name="message"
                              onChange={this.handlechangeall}/> <br/>

                    <input type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}

export default ContactUsForm;