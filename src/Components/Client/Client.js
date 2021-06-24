import React from 'react'
import './Client.css'

import shopify from '../../assets/shopify.png'
import square from '../../assets/square.png'
import bussiness from '../../assets/bussiness.png'
function Client() {
    return (
     <div className="container-fluid" id="client">
     <div className="col-12 p-5 container h-100">
    <div id='content' className="row  d-flex justify-content-center align-items-center">
      <div className="col">
      <div id='clientContent'  className="col d-flex flex-column justify-content-center">
        <h2>Contactless visitor system</h2>
        <h3>How do we work?</h3>
        <p>Scan QR code at the front desk/Resception.</p>
        <p>Enter & verify your Phone Number. Fill your detail & click a selfie via Registration from on the Phone.</p>
        <p>Complete Check-in and recive E-badge/E-pass.</p>
        <button type="button" class="btn btn-warning  rounded-pill text-light mt-3">Leaen More</button>
      </div>
      </div>
      <div className="col justify-content-center d-flex align-items-center">
      <div className="illustration"><img src={bussiness} alt="" /></div>
      </div>
  </div>
  </div>
  <div className="container-fluid  bg-light d-flex flex-column justify-content-center align-items-center text-center" >
          <h2 id='heading' className='mt-5'>Our Clinents</h2>
          <div className="col-10 d-flex p-5 align-items-center justify-content-center">
              <div className="col-3  p-3 flex-column  d-flex align-items-center justify-content-center">
              <img id='clientImg' src={shopify} alt="" />
              </div>
              <div className="col-3  p-3 flex-column d-flex align-items-center justify-content-center">
              <img id='clientImg' src={square} alt="" />
            
              </div>
              <div className="col-3  p-3 flex-column d-flex align-items-center justify-content-center">
              <img id='clientImg' src={shopify} alt="" />
              
              </div>
              <div className="col-3  p-3  flex-column  d-flex align-items-center justify-content-center">
              <img id='clientImg' src={square} alt="" />
              
              </div>
          </div>
       </div></div>
    )
}

export default Client

