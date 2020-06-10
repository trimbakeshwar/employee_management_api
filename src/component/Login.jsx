import React, { Component } from 'react';  
import {Link } from "react-router-dom";   
import empService from '../services/service'
let service = new empService()

//import { Button, Card, CardBody,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

class Login extends Component {  
    constructor(props) {
        super(props);
        this.state={
          Username:'',
          Password:''
        }
      }
      
      handleChange= (e)=> { 
        console.log(e.target.value);
         
        this.setState({[e.target.name]:e.target.value});  
        console.log(this.state);
        
      }  
      //method for login
      login=(e) => {
        e.preventDefault();
        console.log(this.state);
        let requestData ={
          Username:this.state.Username,
          Password:this.state.Password
        }
        service.login(this.state.Username,this.state.Password).then((json)=>{
          this.props.history.push("/getAllEmployee");
          console.log("responce data==>",json);
        if(json.data.status===true){  
        alert('Login Sucessfull !!');  
        }   
          
        }).catch((err)=>{
          console.log(err);
          
        })
        
    }  
  
    render() {  
          return (
            <fieldset>
            <form  class="container">
               <h2 align="center">Login</h2>
          
                 <p>Username</p>
                    <input type="text" id="username" name="Username" onChange={this.handleChange} value={this.state.Username}  placeholder="Enter Username" title="Username is required" required/>
                 <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password}  placeholder="Enter Password"  title="Password is required"  required/>
                    <input type="checkbox" /> Remember me
                 <div className="footer">
                 <button type="button" onClick={this.login} className="btn"> Login </button>
                 <Link to="/registration"><button type="button" className="btn">Create new Account</button></Link>
                </div>
      
                <span class="psw">Forgot <a href="#">password?</a></span>
             </form>
          </fieldset>
          );
        };        
    }
  
export default Login;  