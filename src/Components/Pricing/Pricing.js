import React from 'react'
import './Pricing.css'
function Pricing() {
    return (
        <>
        <div className="pricing">
            <div className="container col">
            <div className="col d-flex  flex-column p-3 align-items-center text-center">
            <h2 id="heading">Finally,a visitor management system <br /> that scales with you</h2>
            <p>Unlimited visitors. Unlimited hots. Unlimited kiosks.</p>
            </div>
            <div className="col d-flex flex-column p-5 align-items-center text-center">
            <p style={{fontWeight:'500'}} >start with must-have | (Our most popular return-to-workplace offering)</p>
            </div>
            <div className="col d-flex flex-column align-items-center  priningsctn">
            <div className="pricingbx">
                <div className="col mb-3  d-flex align-items-center">
                <div className="pack"></div>
               <h2>Prime Pack</h2>
                </div>
                <div className="col d-flex align-items-center">
                <h4 id='texthead'>100 $ <span>per month/location</span></h4>
                </div>
                <div className="line"></div>
                <p style={{fontWeight:'500',color:'#555'}}>Key features to echance your employee and visitor experience,secure assets, and stremline operations.</p>
                <ul>
                    <li>Unlimited visitor,hosts and kiosks</li>
                    <li>Full branding(kiosks,email,badges)</li>
                    <li>Custom sign-in flow incl.picture and NDA</li>
                    <li>Reciptions dashboard and digital logbook</li>
                    <li>Email and text notifications</li>
                </ul>
                <p style={{fontWeight:'500',color:'#555'}}>API access and webhooks for intergrations</p>
                <div className="col  d-flex flex-column align-items-center">
                <i class="fas fa-chevron-down"></i>
                 <button id='btn'>Try for free</button>
                </div>
            </div>

          </div>
            </div>
        </div>
        </>
    )
}

export default Pricing
