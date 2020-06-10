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
 import empgetDataService from '../services/service'
const service = new empgetDataService()


 export class User extends Component {
  
   constructor(props){
     super(props);
     this.state={
       employeeData:[]
     }
   }

   componentDidMount(){
     this.GetEmployees();
   }
   GetEmployees = () =>{
     service.GetEmployees().then((json) =>{
      console.log("employee array",json);
       this.setState({employeeData: json.data.result});
       console.log("employee array",this.state);
     }) .catch((err)=>{
      console.log(err)
    })
  }
 
   render() {
     const{employeeData}=this.state    
     return (        
       <div className="container">
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
           
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
         {
           
            this.state.employeeData.map((d, index) => {
              return <TableRow key={index}>
                  <TableCell component="th" scope="id">
                      {d.userId}
                   </TableCell>
                    
               <TableCell align="left">{d.userId}</TableCell>
               <TableCell align="left">{d.firstName}</TableCell>
               <TableCell align="left">{d.lastName}</TableCell>
               <TableCell align="left">{d.Qualification}</TableCell>
               <TableCell align="left">{d.payment}</TableCell>
              <TableCell align="left">{d.Email}</TableCell>
               <TableCell align="left">{d.userName}</TableCell>
             
               <TableCell align="left">
                 <Button  variant="contained" style={{colour:'green'}}onClick={()=>this.edithandler(d)}>Edit</Button>
               </TableCell>
               <TableCell align="left"><Button  style={{colour:'red'}}variant="contained" colour="Red">Delete</Button></TableCell>
             </TableRow>
           })
          }
          
         </TableBody>
       </Table>
     </TableContainer>
    </div>
     );    

  }
 }

 export default User;
