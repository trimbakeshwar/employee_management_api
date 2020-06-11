import axios from "axios";


class Service {
  //API calling for Login
  login(userName,passWord){
      console.log(" login in axios service ",userName,passWord);   
  return   axios.get('https://localhost:44329/api/Employee/login/'+userName+'/'+passWord);
  }
  registration(data){
    console.log(" registration in axios service ",data);   
return   axios.post('https://localhost:44329/api/Employee/',data);
   } 
GetEmployees(){
  console.log(" GetAllEmployees in axios service ");
  return axios.get('https://localhost:44329/api/Employee/');
}
updates(data){
console.log(" update in axios service ",data);
return axios.patch('https://localhost:44329/api/Employee/',data);
}
AddEmployees(data)
{
  console.log(" update in axios service ",data);
  return axios.put('https://localhost:44329/api/Employee/',data);
}
getspecificEmployee(id)
{
  console.log(" get employee in axios service ",id);
  return axios.get('https://localhost:44329/api/Employee/'+id);
}
delete(id)
{
  console.log(" delete employee in axios service ",id);
  return axios.delete('https://localhost:44329/api/Employee/'+id);
}
}

export default Service;