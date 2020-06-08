import React from 'react';
import './App.css';

import "./CSS/registration.css";
import Registration from './component/registration';  
import Login from './component/login';    
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import User from './component/getAllEmployee';
import Update from '/component/update'
function App() {
  return (

  <div>
  <Router>
  
  <Route exact path="/" component={Login} />
  <Route path="/registration" component={Registration} />
  <Route path="/getAllEmployee" component={User} />
  <Route path="/update" component={Update} />
   
  </Router>
  </div>
   );
}

export default App;
