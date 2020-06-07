
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

    <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your first name" icon="user" group type="text" validate error="wrong"
            success="right" />
             <MDBInput label="Your last name" icon="user" group type="text" validate error="wrong"
            success="right" />
             <MDBInput label="Your Qualification" icon="user" group type="text" validate error="wrong"
            success="right" />
             <MDBInput label="payment " icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label=" your user name" icon="user" group type="text" validate
            error="wrong" success="right" />
          <MDBInput label="Your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn color="primary">Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  );  
}  
}  

export default Registration ;