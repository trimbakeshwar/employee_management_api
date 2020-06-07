import React, { Component } from 'react';  
import {Link } from "react-router-dom";   
//import { Button, Card, CardBody,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            userName: '',  
            Password: ''  
        }  
  
        this.Password = this.Password.bind(this);  
        this.userName = this.userName.bind(this);  
        this.login = this.login.bind(this);  
    }   
    userName(event) {  
        this.setState({ userName: event.target.value })  
    }  
    Password(event) {  
        this.setState({ Password: event.target.value })  
    }  
    login(event) {  
        debugger;  
        fetch('https://localhost:44329/api/Employee/Login', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                userName: this.state.userName,  
                Password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == false)  
                    alert('Invalid User');  
                //else  
                   // this.props.history.push("/Dashboard");  
            })  
    }  
  
    render() {  
          return (
            <fieldset>
            <form  class="container">
               <h2 align="center">Login</h2>
          
                 <p>Username</p>
                    <input type="text" id="username" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" title="Username is required" required/>
                 <p>Password</p>
                    <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password"  title="Password is required"  required/>
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