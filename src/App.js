import React from 'react';
import './App.css';
import "./CSS/login.css";
import Registration from './component/registration';  
import Login from './component/login';  
import { BrowserRouter as Router, Route } from 'react-router-dom';   

function App() {
  return (

  <div>
  <Router>
  
  <Route exact path="/" component={Login} />
  <Route path="/registration" component={Registration} />
  
  
   
  </Router>
  </div>
   );
}

export default App;
