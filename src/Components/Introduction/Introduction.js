
import React from 'react'
import './Intro.css'
import mobile from '../../assets/mobile.png'
function Introduction() {
    return (
        <div id='Itroduction' className="container-fluid">
            <div className="row">
                <div className="col-12" style={{ Height: '100%' }}>
                    <div className="row d-flex flex-column p-5 align-items-center text-center">
                        <h2 id='heading'>Introducing eChecking</h2>
                        <p>An innovative approach to welcom your employees,<br />visitors, and client back to the workplace</p>
                    </div>
                    <div className="row-10 mblImgContainer">
                        <div className="col-4">
                            <img id='imgmbl' src={mobile} alt="" />
                        </div>
                        <div id='text' className="col-4 p-3">
                            <h2 className='text-primary'>Leverage the tools you already use</h2>
                            <p>Streamline access and orchestrate complex workflows</p>
                            <h2 className='text-primary'>Access in your pocket</h2>
                            <p>A seamless and intuitive app-based experience for employees</p>
                            <h2 className='text-primary'>Control and visibility in one place</h2>
                            <p>Combine real-time,accurate,access-control data with real-time usage data</p>
                            <button type="button" id='btn' class="btn btn-warning  rounded-pill text-light mt-2">Book a demo</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row" id='iconSection' >
                <div className="container d-flex flex-column justify-content-center align-items-center text-center" >
                    <h2 id='heading'>What eCheckin does for you</h2>
                    <div className="col-9 mt-4 d-flex p-3 align-items-center justify-content-center">
                        <div className="col-4  p-3 flex-column  d-flex align-items-center justify-content-center">
                            <i id='icon' class="fas fa-calendar-alt text-primary"></i><p id='txt'>Schedule Meetings</p>
                        </div>
                        <div className="col-4  p-3 flex-column d-flex align-items-center justify-content-center">
                            <i id='icon' class="fas fa-shield-alt text-primary"></i><p id='txt'>Adhar Verification</p>
                        </div>
                        <div className="col-4  p-3 flex-column d-flex align-items-center justify-content-center">
                            <i id='icon' class="fas fa-cogs text-primary"></i><p id='txt'>Manage Digital Screening</p>
                        </div>
                        <div className="col-4  p-3  flex-column  d-flex align-items-center justify-content-center">
                            <i id='icon' class="fas fa-question text-primary"></i><p id='txt'>Covid screening and questionnaire</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction

