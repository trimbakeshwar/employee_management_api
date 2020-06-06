
import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  

class registration extends Component{ 
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
    this.passWord({ Email: event.target.value })  
  } 
  Register(event) {  
    fetch('') 
  }   
  register(event) {  
  
    fetch('https://localhost:44329/api/Employee/', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
  
        firstName = this.state.firstName,
        lastName = this.state.lastName,
        Qualification =this.state.Qualification,  
        payment = this.state.payment,
        Email = this.state.Email, 
        userName =this.state.userName, 
        passWord = this.state.passWord,  
        Register = this.state.Register,
         
      })  
    }).then((Response) => Response.json())  
    .then((Result) => {  
      if (Result.Status == 'Success')  
              this.props.history.push("/Dashboard");  
      else  
        alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
    })  
}
render() {  
  
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="9" lg="7" xl="6">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form>  
                  <div class="row" className="mb-2 pageheading">  
                    <div class="col-sm-12 btn btn-primary">  
                      Sign Up  
                      </div>  
                  </div>  
                  <InputGroup className="mb-3">  
                    <Input type="text"  onChange={this.firstName} placeholder="Enter firstName" />  
                  </InputGroup>  
                  <InputGroup className="mb-3">  
                    <Input type="text"  onChange={this.lastName} placeholder="Enter lastName" />  
                  </InputGroup>  
                  <InputGroup className="mb-3">  
                    <Input type="text"  onChange={this.Qualification} placeholder="Enter Qualification" />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="text"  onChange={this.payment} placeholder="Enter payment" />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                  </InputGroup> 
                  <InputGroup className="mb-4">  
                    <Input type="text"  onChange={this.userName} placeholder="Enter user name" />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="password"  onChange={this.passWord} placeholder="Enter password" />  
                  </InputGroup>  
                  <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div>  
  );  
}  
}  

