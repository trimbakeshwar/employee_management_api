import React, { Component } from 'react';  
import './App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
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
            <div className="app flex-row align-items-center">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div class="row" className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                    Login  
                                                 </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.userName} placeholder="Enter userName" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button onClick={this.login} color="success" block>Login</Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
        );  
    }  
}  
  
export default Login;  