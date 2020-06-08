
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


class Registration extends Component{ 
    constructor() {  
      super();  
  
      this.state = {  
        firstName:'',
        lastName:'',  
        Qualification:'',
        payment:'', 
        Email:'',
        userName:'', 
        passWord:''
    }  
  
    this.firstName = this.firstName.bind(this);  
    this.lastName = this.lastName.bind(this);  
    this.Qualification = this.Qualification.bind(this);  
    this.payment = this.payment.bind(this);  
    this.Email = this.Email.bind(this);  
    this.userName = this.userName.bind(this);  
    this.passWord = this.passWord.bind(this);  
    this.Register = this.Register.bind(this);
    
  }  
  firstName(event) {  
    this.setState({ firstName: event.target.value })  
  }  
  
  lastName(event) {  
    this.setState({ lastName: event.target.value })  
  }  
  
  Qualification(event) {  
    this.setState({ Qualification: event.target.value })  
  }  
  payment(event) {  
    this.setState({ payment: event.target.value })  
  }  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  } 
  userName(event) {  
    this.setState({ userName: event.target.value })  
  }  
  passWord(event) {  
    this.passWord({ passWord: event.target.value })  
  } 
  Register(event) {  
  
  fetch('https://localhost:44329/api/Employee/', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        Qualification: this.state.Qualification,  
        payment: this.state.payment,
        Email: this.state.Email, 
        userName: this.state.userName, 
        passWord: this.state.passWord,  
        Register: this.state.Register,
        
      })  
    }).then((Response) => Response.json())  
    .then((Result) => {  
      if (Result.Status == true)  
      alert('welcome !!!!!')  
             // this.props.history.push("/Dashboard");  
      else  
        alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
    })  
}
render() {  
 
  return (  
    <fieldset>
            <form  class="container">
               <h2 align="center">sign up</h2>
               <p>firstname</p>
                    <input type="text" name="firstName" name="firstName" onChange={this.handleChange} placeholder="Enter firstName" title="firstName is required" required/>
                    <p>lastName</p>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} placeholder="Enter lastName" title="lastName is required" required/>
                    <p>Qualification</p>
                    <input type="text" id="Qualification" name="Qualification" onChange={this.handleChange} placeholder="Enter Qualification" title="Qualification is required" required/>
                    <p>payment</p>
                    <input type="text" id="payment" name="payment" onChange={this.handleChange}  placeholder="Enter payment" title="payment is required" required/>
                    <p>Email</p>
                    <input type="text" id="Email" name="Email" onChange={this.handleChange}  placeholder="Enter Email" title="Email is required" required/>
                    <p>userName</p>
                    <input type="text" id="userName" name="userName" onChange={this.handleChange}  placeholder="Enter userName" title="userName is required" required/>
                    <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange}  placeholder="Enter Password"  title="Password is required"  required/>
                    <div className="footer">
                    <button type="button" onClick={this.Register} className="btn"> Register </button>
                   
                </div>
             </form>
          </fieldset>
  );  
}  
} 

export default Registration ;