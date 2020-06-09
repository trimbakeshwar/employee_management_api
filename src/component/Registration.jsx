
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import {Link } from "react-router-dom";   
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import empregService from '../services/service'
let service = new empregService()

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
  }
  
    handleChange= (e)=> { 
      console.log(e.target.value);
       
      this.setState({[e.target.name]:e.target.value});  
      console.log(this.state);
      
    }  
    //method for login
    Register=(e) => {
      e.preventDefault();
      console.log(this.state);
      let requestData ={
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        Qualification:this.state.Qualification,
        payment:this.state.payment,
        Email:this.state.Email,
        userName:this.state.userName,
        passWord:this.state.passWord

      }
      service.registration(requestData).then((json)=>{
        console.log("responce data==>",json);
        if(json.data.status===true){  
          alert('registration Sucessfull !!');  
          } 
        this.props.history.push("/login");
       
        
        
      }).catch((err)=>{
        console.log(err);
        
      })
      
}
render() {  
 
  return (  
    <fieldset>
            <form  class="container">
               <h2 align="center">sign up</h2>
               <p>firstname</p>
                    <input type="text" name="firstName" name="firstName" onChange={this.handleChange}  value={this.state.firstName} placeholder="Enter firstName" title="firstName is required" required/>
                    <p>lastName</p>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Enter lastName" title="lastName is required" required/>
                    <p>Qualification</p>
                    <input type="text" id="Qualification" name="Qualification" onChange={this.handleChange}  value={this.state.Qualification} placeholder="Enter Qualification" title="Qualification is required" required/>
                    <p>payment</p>
                    <input type="text" id="payment" name="payment" onChange={this.handleChange}  value={this.state.payment}  placeholder="Enter payment" title="payment is required" required/>
                    <p>Email</p>
                    <input type="text" id="Email" name="Email" onChange={this.handleChange}  value={this.state.Email} placeholder="Enter Email" title="Email is required" required/>
                    <p>userName</p>
                    <input type="text" id="userName" name="userName" onChange={this.handleChange}  value={this.state.Username} placeholder="Enter userName" title="userName is required" required/>
                    <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange}  value={this.state.Password} placeholder="Enter Password"  title="Password is required"  required/>
                    <div className="footer">
                  <button type="button" onClick={this.Register} className="btn"> Register </button>                   
                </div>
             </form>
          </fieldset>
  );  
}  
} 

export default Registration ;