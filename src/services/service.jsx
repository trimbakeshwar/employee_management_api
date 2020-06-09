import axios from "axios";


class Service {
  //API calling for Login
  login(data){
      console.log(" login in axios service ",data);   
  return   axios.get('https://localhost:44329/api/Employee/login',data);
  }
  registration(data){
    console.log(" registration in axios service ",data);   
return   axios.post('https://localhost:44329/api/Employee/',data);
}
}

export default Service;