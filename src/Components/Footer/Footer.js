import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div className='footer bg-dark d-flex justify-content-center align-items-center'>
            <div className="row-8 container">
            <div className="col-4">
                <h2>eCheckin</h2>
                <p>Contact visitor system</p>
                <div className="social">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fab fa-instagram"></i>
                </div>
            </div>
            <div className="col-4">
            <h4>Product</h4>
            <Link  className='footerLinks'>Security</Link>
            <Link className='footerLinks'>Compliance</Link>
            <Link className='footerLinks'>Efficiency</Link>
            <Link className='footerLinks'>Branding</Link>
            <Link className='footerLinks'>Enterprise services</Link>
            <Link className='footerLinks'>Integration</Link>
            <Link className='footerLinks'>Covid-19 features</Link>
            <Link className='footerLinks'>All features</Link>
            <Link className='footerLinks' style={{marginTop:'50px'}} id='echekinRight' >2020 eCheckin. All Right Reseverd.</Link>
            </div>
            <div className="row-4" id='footermailSection'>
                <h4>Contact Us</h4>
               <Link className='footerLinks'><i class="fas fa-envelope"></i>salestecboot.mumbai@gmail.com</Link>
               <Link className='footerLinks'><i class="fas fa-globe"></i>website</Link>
               <Link className='footerLinks' style={{marginTop:'50px'}} id='echekinRight' >2020 eCheckin. All Right Reseverd.</Link>
            </div>
            </div>
        </div>
    )
}

export default Footer
