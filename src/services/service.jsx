import axios from "axios";


export function GetAllEmployees()
{

  return axios.get('https://localhost:44329/api/Employee/')
} ;
export function UpdateEmployee(employeeDetails)
{
    return axios.patch('https://localhost:44329/api/Employee/'+employeeDetails)
}