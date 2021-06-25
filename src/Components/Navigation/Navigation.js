import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'
function Navigation() {


  return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
   <div className="logo">
      <h2>eCheckin</h2>
   </div> 
   <ul  className="navbar-nav" id="navbarTogglerDemo01">
          <li className="nav-item">
            <NavLink 
            exact
            activeClassName='active'
            activeStyle={{color: '#ffc107'}}
            className="nav-link"
            to='/eChekin02' >Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            exact
            activeClassName='active'
            activeStyle={{color: '#ffc107'}}
            className="nav-link" to='/Product'>Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            exact
            activeClassName='active'
            activeStyle={{color: '#ffc107'}}
            className="nav-link" to='/Pricing'>Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            exact
            activeClassName='active'
            activeStyle={{color: '#ffc107'}}
            className="nav-link" to='/Blog'>Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
            exact
            activeClassName='active'
            activeStyle={{color: '#ffc107'}}
            className="nav-link" to='/Contact'>Contact
            </NavLink>
          </li>
          <button type="button" style={{height:'40px'}} class="btn btn-warning  rounded-pill text-dark">
          <NavLink 
            exact
            style={{textDecoration:'none',color:'#f2f2f2'}}
            activeClassName='active'
            activeStyle={{color: '#fff'}}
             to='/Login'>Login
            </NavLink>
          </button>
          
        </ul>
   
        <button className="navbar-toggler" type="button"
         data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
  );
}

export default Navigation
