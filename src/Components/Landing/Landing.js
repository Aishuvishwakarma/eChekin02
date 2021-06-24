import React from 'react'
import './Landing.css'
import dotsvg from '../../assets/dot.png'
import {NavLink} from 'react-router-dom'
function Landing() {
    return (
       <div id="landing" className="bg-dark">
         <div className="container">
        <div className="row">
          <div  className="col d-flex flex-column justify-content-between">
          <div id='svgimg1' className="svgimg"><img src={dotsvg} alt="" /></div>
          <div id='svgimg2' className="svgimg"><img src={dotsvg} alt="" /></div>
          <div id='svgimg3' className="svgimg"><img src={dotsvg} alt="" /></div>
          <div id='svgparent'>
          <div className="svgdiv">
               <div className="img mr-3">
                   <img src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               </div>
            <button type="button" class="btn btn-warning  rounded-pill text-dark">
            <NavLink 
             exact
            style={{textDecoration:'none',color:'#f2f2f2'}}
            activeClassName='active'
            activeStyle={{color: '#fff'}}
             to='/Demo'>Hey there i'm saam
            </NavLink>
            </button>
           </div>
           <div className="svgdiv">
           <button type="button" className="btn btn-warning  rounded-pill text-dark">
            <NavLink 
             exact
            style={{textDecoration:'none',color:'#f2f2f2'}}
            activeClassName='active'
            activeStyle={{color: '#fff'}}
             to='/Demo'>
             Hey there i'm nayra
            </NavLink>
            </button>
            <div className="img">
                <img src="https://images.unsplash.com/photo-1605949405965-d49ada3f9189?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           </div>
          </div>
          </div>
          <div className="col d-flex flex-column justify-content-center ">
           <h3>Contactless visitor <br />System</h3>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium tenetur officiis voluptatum quibusdam blanditiis rerum.</p>
          <div className="buttons">
          <button type="button" className="btn btn-warning  rounded-pill text-dark">
            <NavLink 
             exact
            style={{textDecoration:'none',color:'#f2f2f2'}}
            activeClassName='active'
            activeStyle={{color: '#fff'}}
             to='/Demo'>Take a Demo
            </NavLink>
            </button>
            <button type="button" class="btn  btn-outline-warning rounded-pill text-dark">
            <NavLink 
             exact
            style={{textDecoration:'none',color:'#f2f2f2'}}
            activeClassName='active'
            activeStyle={{color: '#fff'}}
             to='/login'>Login
            </NavLink>
            </button>
          </div>
          </div>
        </div>
        </div>
       </div>
    )
}

export default Landing
