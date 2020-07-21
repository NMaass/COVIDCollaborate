import React, {Component} from 'react';
import './App.css';
import firebase from './firebase.js';
class App extends Component {
	constructor(){
super();
this.state ={
	masks:'',
	maskamount:'',
	gloves:'',
	gloveamount:'',
	sanitizer:'',
	sanitizeramount:''
			}	
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
	this.setState({
	[e.target.name]: e.target.value});
	}
	handleSubmit(item){
		item.preventDefault();
	if(this.state.Hospital == null)
	{alert('Please enter the Hospital Name');}
	else if(this.state.maskamount == null)
	{alert('Please enter the amount of needed masks');}
	else if(this.state.scrubamount == null)
	{alert('Please enter the amount of needed scrubs');}
	else if(this.state.gloveamount == null)
	{alert('Please enter the amount of needed gloves');}
	else if(this.state.sanitizeramount == null)
	{alert('Please enter the amount of needed hand sanitizer');}
	else if(this.state.faceshieldamount == null)
	{alert('Please enter the Hospital Name');}
		else{
		const itemsRef = firebase.database().ref("Requests");
		const request = {
		HospitalName: this.state.Hospital,
		Maskamount: this.state.maskamount,
		Gloveamount:this.state.gloveamount,
		Sanitizer:this.state.sanitizeramount,
		Scrubs:this.state.scrubamount,
		Faceshield:this.state.faceshieldamount,
		}
		itemsRef.push({request});
		alert('Your Request has been successfully added');
		}
	}
	
render(){
  return (
  <>
	<head> <title> Hospital Request Page </title> </head>
	<body> <h1> Request Page </h1> 
	<div>
	<form onSubmit={this.handleSubmit}>
	<label for="maskamount">Mask Request Amount</label>
	<input type = "number" id= "maskamount" name="maskamount" placeholder = "0" min="0" max="500" onChange={this.handleChange} value={this.state.maskamounts}></input>
	<br></br>
	<label for="gloveamount">Glove Request Amount</label>
	<input type = "number" id= "gloveamount" name="gloveamount" placeholder = "0" min="0" max="500" onChange={this.handleChange} value={this.state.gloveamount}></input>
	<br></br>
	<label for="sanitizeramount">Hand Sanitizer Request Amount</label>
	<input type = "number" id= "sanitizeramount" name="sanitizeramount" placeholder = "0" min="0" max="500" onChange={this.handleChange} value={this.state.sanitizeramount}></input>
	<br></br>
	<label for="scrubamount">Scrub Request Amount</label>
	<input type = "number" id= "scrubamount" name="scrubamount" placeholder = "0" min="0" max="500" onChange={this.handleChange} value={this.state.scrubamount}></input>
	<br></br>
	<label for="faceshieldamountamount">Faceshield Request Amount</label>
	<input type = "number" id= "faceshieldamount" name="faceshieldamount" placeholder = "0" min="0" max="500" onChange={this.handleChange} value={this.state.faceshieldamount}></input>
	<br></br>
	<label for="Hospital">Hospital Name</label>
	<input type = "text" id = "Hospital" name = "Hospital" placeholder = "enter hospital name" onChange={this.handleChange} value={this.state.hospital}></input>
	<br></br>

	<button type="submit">Make Request</button>
	</form>
	</div>
	</body>
	</>
	);
	}
}

export default App;
