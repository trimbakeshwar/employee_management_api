import axios from "axios";
export function GetAllEmployees()
{

  return axios.get('https://localhost:44329/api/Employee/');
} ;