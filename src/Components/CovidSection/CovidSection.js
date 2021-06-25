import React from 'react'
import './CovidSection.css'
function CovidSection() {
    return (
        <div className="container-fluid bg-light" id="Covidsctn">
        <div className="col-9 container h-100">
        <div className="row d-flex p-5 flex-column align-items-center text-center">
        <h2 id='heading'>still dont't belive us</h2>
        <p>we are happy to show you our works</p>
       </div>
       <div id='content' style={{minHeight:'400px'}} className="row">
        <div className="col">
        <div id='covidContent'  className="row-6 d-flex flex-column justify-content-center">
           <div className="line"></div>
           <h2>How Sodexo addressed<br />
           COVID-19 challenges with<br />eCheckin</h2>
           <div className="line"></div>
           <p>Learn why sodexo chose eCheckin to help the organizatiuon<br />
           combat the global pandemic and reinforce health and safety<br />
           across their buildings.
           </p>
           <button type="button" class="btn btn-warning  rounded-pill text-light mt-3">Read More</button>
         </div>
        </div>
         <div className="col">
         <div className="covidleft"><img src='https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaW1hbGlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="" /></div>
         </div>
     </div>
     </div>
     </div>
    )
}

export default CovidSection
