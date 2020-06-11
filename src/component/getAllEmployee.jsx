 import React, { Component } from 'react';

 import {Link } from "react-router-dom";   
 import '../CSS/table.css';
 import Table from '@material-ui/core/Table';
 import TableBody from '@material-ui/core/TableBody';
 import TableCell from '@material-ui/core/TableCell';
 import TableContainer from '@material-ui/core/TableContainer';
 import TableHead from '@material-ui/core/TableHead';
 import TableRow from '@material-ui/core/TableRow';
 import Paper from '@material-ui/core/Paper';
 import Button from '@material-ui/core/Button';
 import empgetDataService from '../services/service'
 
const service = new empgetDataService();


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
    
  updates = (obj) => {
    console.log("In update Method", obj);
    this.props.history.push('/update' + obj);

}
getspecificEmployee = (ID) => {
  service.getspecificEmployee(ID).then((json) => {  
      if (json.data.status === true) {
          alert('Record for ID found successfully!!');
      }
  })
}
delete = (ID) => {
  service.delete(ID).then((json) => {
      if (json.data.status === true) {
          alert('Record deleted successfully!!');
        
      }
  })
}
 
   render() {
     const{employeeData}=this.state    
     return (  
      <div className=".container">   
      <h1 align="right" > <Link to="/" align="right"><Button type="button" color="secondary" >
      Sign out
</Button></Link></h1>

<h2 align="right" > <Link to="/addEmployeeDetails" align="right"><Button type="button" color="secondary" >
      Add Employee
</Button></Link></h2>
<h2 align="right" > <Link to="/update" align="right"><Button type="button" color="secondary" >
      update Employee
</Button></Link></h2>

       <div className="table">
           
              
       <TableContainer  className="table" component={Paper} >    
       <Table 
               aria-label="simple table" 
               aria-labelledby="Employee Details"            
               aria-label="Employee Details"
               id='Employee' >
       <TableHead>
        <TableRow>
        <TableCell >id</TableCell>
             <TableCell align="left">userId</TableCell>
             <TableCell align="left">firstName</TableCell>
             <TableCell align="left">lastName</TableCell>
            <TableCell align="left">Qualification</TableCell>
            <TableCell align="left">payment</TableCell>
             <TableCell align="left">Email</TableCell>
            <TableCell align="right">Delete</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
         {
           
            this.state.employeeData.map((d, index) => {
              return <TableRow key={index}>
                  <TableCell component="th" scope="id">
                      {d.userId}
                   </TableCell>
                    
              
               <TableCell align="left">{d.firstName}</TableCell>
               <TableCell align="left">{d.lastName}</TableCell>
               <TableCell align="left">{d.qualification}</TableCell>
               <TableCell align="left">{d.payment}</TableCell>
              <TableCell align="left">{d.email}</TableCell>
               <TableCell align="left">{d.userName}</TableCell>  
               <TableCell align="left">
                 
               
               </TableCell>
               <TableCell align="left"><Button  style={{colour:'red'}}variant="contained" onClick={() => this.delete(d.userId)}>Delete</Button></TableCell>
             </TableRow>
           })
          }
          
         </TableBody>
       </Table>
     </TableContainer>
    </div>
    </div>   
     );    

  }
 }

 export default User;
