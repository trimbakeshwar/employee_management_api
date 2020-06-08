import React, { Component } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {GetAllEmployees} from '../services/service'
import Update from "./update";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export class User extends Component {
  
  constructor(props){
    super(props)
    this.state={
      employeeData:[]
    }
  }

  componentDidMount(){
    GetAllEmployees()
    .then(responce => {
      console.log(responce)
      this.setState({employeeData : responce.data.data})
    })
    .catch(error=>{
      console.log(error)
    })
  }
  edithandler=(editRow)=>{
      console.log(editRow)
      this.props.history.push("/update")
  }
  
  
  deleteHandler = (eve) =>{

  }
  render() {
    const{employeeData}=this.state    
    return (        
      <TableContainer  className="table" component={Paper} >    
      <Table  aria-label="simple table" 
              aria-labelledby="Employee Details"            
              aria-label="Employee Details">
        <TableHead>
          <TableRow>
            <TableCell align="left">userId</TableCell>
            <TableCell align="left">firstName</TableCell>
            <TableCell align="left">lastName</TableCell>
            <TableCell align="left">Qualification</TableCell>
            <TableCell align="left">payment</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">userName</TableCell>
            <TableCell align="left">password</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.map((row) => (
            <TableRow key={row.email}>              
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.Qualification}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
              <TableCell align="left">{row.Email}</TableCell>
              <TableCell align="left">{row.userName}</TableCell>
              <TableCell align="left">{row.password}</TableCell>
              <TableCell align="left">
                <Button  variant="contained" style={{colour:'green'}}onClick={()=>this.edithandler(row)}>Edit</Button>
              </TableCell>
              <TableCell align="left"><Button  style={{colour:'red'}}variant="contained" colour="Red">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    );    

  }
}

export default User;
