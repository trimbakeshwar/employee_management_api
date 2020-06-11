  
import React, { Component } from 'react';

import {Link } from "react-router-dom";
import {Container, TextField,Button} from '@material-ui/core';
import axios from "axios";
import User from '../component/getAllEmployee';
import empregService from '../services/service'
let service = new empregService()

class Update extends Component{ 
    constructor(props) {  
      super(props);  
  
      this.state = {  
        firstName:'',
        lastName:'',  
        qualification:'',
        payment:'', 
        email:'',
        userId:'',
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
    update=(e) => {
      e.preventDefault();
      console.log(this.state);
      let requestData ={
        firstName:  this.state.firstName ,
        lastName:  this.state.lastName ,
        qualification:  this.state.qualification ,
       payment:  this.state.payment ,
      email:  this.state.email ,
      userId:this.state.userId,
      userName:  this.state.userName ,
        passWord:  this.state.passWord 


      }
      service.updates(requestData).then((json)=>{
        
        this.props.history.push("/getAllEmployee");
        if(json.data.status===true){  
          alert('update Sucessfull !!');  
          } 
          this.props.history.push('/getAllEmployee');
       
       
        
        
      }).catch((err)=>{
        console.log(err);
        
      })
      
}
 
      render() {
          const{firstName,lastName,qualification,payment,email,userId,userName,Password}=this.state
        return (
          <fieldset>
            <form  class="container">
               <h2 align="center"> update Employee information</h2>
               <p>userId</p>
                    <input type="text" name="userId" name="userId" onChange={this.handleChange} value={this.state.userId} placeholder="Enter userId" 
                     label={userId} value={userId} title="userId is required" required/>
                    <p>firstname</p>
                    <input type="text" name="firstName" name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="Enter firstName"
                     label={firstName} value={firstName} title="firstName is required" required/>
                    <p>lastName</p>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Enter lastName" 
                     label={lastName} value={lastName} title="lastName is required" required/>
                    <p>Qualification</p>
                    <input type="text" id="qualification" name="qualification" onChange={this.handleChange} value={this.state.qualification} placeholder="Enter Qualification" 
                    label={qualification} value={qualification} title="Qualification is required" required/>
                    <p>payment</p>
                    <input type="text" id="payment" name="payment" onChange={this.handleChange} value={this.state.payment} placeholder="Enter payment" 
                    label={payment} value={payment} title="payment is required" required/>
                    <p>Email</p>
                    <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email" 
                    label={email} value={email} title="Email is required" required/>
                    <p>userName</p>
                    <input type="text" id="userName" name="userName" onChange={this.handleChange} value={this.state.userName} placeholder="Enter userName" 
                    label={userName} value={userName} title="userName is required" required/>
                    <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password"  
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