import React from 'react';
import './App.css';
import registration from './component/Registration';  
import Login from './component/Login';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   

function App() {
  return (
    <Router>    
    <div className="container">    
      <nav className="navbar navbar-expand-lg navheader">    
        <div className="collapse navbar-collapse" >    
          <ul className="navbar-nav mr-auto">    
          <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
            <li className="nav-item">    
              <Link to={'/Signup'} className="nav-link">Sign up</Link>    
            </li>    
          
          </ul>    
        </div>    
      </nav> <br />    
      <Switch>    
        <Route exact path='/Login' component={Login} /> 
        <Route exact path='/Signup' component={registration} />       
      </Switch>    
    </div>    
  </Router>   
  );
}

export default App;
