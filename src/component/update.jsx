  
import React, { Component } from 'react';
import {Container, TextField,Button} from '@material-ui/core';
import axios from "axios";

 class Update extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName:props.firstName,
            lastName:props.lastName,
            Qualification:props.Qualification,
            payment:props.payment,
            Email:props.Email,
            userId:props.userId,  
            userName:props.userName,  
            Password:props.Password        
        }
      }

      render() {
          const{firstName,lastName,Qualification,payment,Email,userId,userName,Password}=this.state
        return (
          <fieldset>
            <form  class="container">
               <h2 align="center"> update Employee information</h2>
               <p>userId</p>
                    <input type="text" name="userId" name="userId" onChange={this.onChangeHandler} placeholder="Enter userId" 
                     label={userId} value={userId} title="userId is required" required/>
                    <p>firstname</p>
                    <input type="text" name="firstName" name="firstName" onChange={this.onChangeHandler} placeholder="Enter firstName"
                     label={firstName} value={firstName} title="firstName is required" required/>
                    <p>lastName</p>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} placeholder="Enter lastName" 
                     label={lastName} value={lastName} title="lastName is required" required/>
                    <p>Qualification</p>
                    <input type="text" id="Qualification" name="Qualification" onChange={this.handleChange} placeholder="Enter Qualification" 
                    label={Qualification} value={Qualification} title="Qualification is required" required/>
                    <p>payment</p>
                    <input type="text" id="payment" name="payment" onChange={this.handleChange}  placeholder="Enter payment" 
                    label={payment} value={payment} title="payment is required" required/>
                    <p>Email</p>
                    <input type="text" id="Email" name="Email" onChange={this.handleChange}  placeholder="Enter Email" 
                    label={Email} value={Email} title="Email is required" required/>
                    <p>userName</p>
                    <input type="text" id="userName" name="userName" onChange={this.handleChange}  placeholder="Enter userName" 
                    label={userName} value={userName} title="userName is required" required/>
                    <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange}  placeholder="Enter Password"  
                    label={Password} value={Password} title="Password is required"  required/>
                    <div className="footer">
                    <h4 align="center"> <button type="button" onClick={this.update} className="btn"> update </button></h4>
                   
                </div>
             </form>
          </fieldset>
        
        );    
    }
}

export default Update;