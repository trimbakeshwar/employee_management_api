import React, { Component } from 'react';  
import {Link } from "react-router-dom";   
import empService from '../services/service'
let service = new empService()

//import { Button, Card, CardBody,CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

class Login extends Component {  
    constructor(props) {
        super(props);
        this.state={
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
      login=(e) => {
        e.preventDefault();
        console.log(this.state);
        let requestData ={
          userName:this.state.userName,
          passWord:this.state.passWord
        }
        service.login(this.state.userName,this.state.passWord).then((json)=>{
          
          console.log("responce data==>",json);
        if(json.data.status===true){  
        alert('Login Sucessfull !!');  
        }   
        this.props.history.push("/getAllEmployee");
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
                    <input type="text" id="username" name="userName" onChange={this.handleChange} value={this.state.userName}  placeholder="Enter Username" title="Username is required" required/>
                 <p>Password</p>
                    <input type="Password" name="passWord" onChange={this.handleChange} value={this.state.passWord}  placeholder="Enter Password"  title="Password is required"  required/>
                    <input type="checkbox" /> Remember me
                 <div className="footer">
                 <Link to="/getAllEmployee"><button type="button" onClick={this.login} className="btn"> Login </button></Link>
                 <Link to="/registration"><button type="button" className="btn">Create new Account</button></Link>
                </div>
      
                <span class="psw">Forgot <a href="#">password?</a></span>
             </form>
          </fieldset>
          );
        };        
    }
  
export default Login;  