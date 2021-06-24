import React from 'react'
import './Question.css'
import bussiness from '../../assets/bussiness.png'
function Question() {
    return (
        <div className="Question">
        <div className="col-10 container h-100 d-flex justify-content-center align-items-center">
    <div id='content' className="row d-flex justify-content-center align-items-center">
      <div className="col">
      <div id='clientContent'  className="col d-flex flex-column justify-content-center">
        <h2>Got more questions to ask?</h2>
        <h3>Get in Touch With us?</h3>
        <p>we'll be happy to help answer any of your questions send <br />
        us an email and we'll get back to your shortly.
        </p>
        
        <button type="button" class="btn btn-warning  rounded-pill text-light mt-3">Send email</button>
      </div>
      </div>
      <div className="col justify-content-center d-flex align-items-center">
      <div className="illustration"><img src={bussiness} alt="" /></div>
      </div>
  </div>
  </div>
        </div>
    )
}

export default Question
