import React from 'react'
import './ContactUs.css'
import {Link} from 'react-router-dom'
function ContactUs() {
    return (
        <>
        <div className="contact">
         <div className="container">
        <div className="row d-flex flex-column p-5 align-items-center text-center">
        <h2 id='heading'>Contact us</h2>
        <p>We're here to help and always happy<br />hear from you!</p>
         </div>
         <div className="row d-flex flex-column p-5 align-items-center text-center">
        <p>Contact us using the form below. if you need help<br />instantly,ckeck out our <Link to='/help'>Help center</Link></p>or use the chat
         </div>
         <div className="row d-flex flex-column align-items-center  form">
         <div id="formsctn">
         <form action="">
             <h2>First Name <span>*</span></h2>
             <input type="text" />
             <h2>First Name <span>*</span></h2>
             <input type="text" />
             <h2>First Name <span>*</span></h2>
             <input type="text" />
             <h2>First Name <span>*</span></h2>
             <input type="text" />
             <h2>First Name <span>*</span></h2>
             <input type="text" />
             <h2>First Name <span>*</span></h2>
             <input id='msg' type="text" />
             <input type="submit" value='submit'/>
         </form>
         </div>
        </div>
            </div>
         </div>
        <div className="contact">
            <div className="container">
            <div className="row d-flex flex-column p-5 align-items-center text-center">
            <h2 id="heading">Other Contacts</h2>
            </div>
            <div className="row d-flex flex-column p-5 align-items-center text-center">
            <h2 id="heading">Asia/India</h2>
            <div id='cntactdtl' className="col-6 p-5">
                <p>Phone number : <span>+91 9584762135</span></p>
                <p>Email Id : <span>eCheckin@gmail.com</span></p>
                <p>Address : <span>1 North Bridge Road,8th floor found 8,179094 singapore</span></p>
            </div>
            <div className="line"></div>
            <h2 id="heading">America</h2>
            <div id='cntactdtl' className="col-6 p-5">
                <p>Phone number : <span>+31 9584762135</span></p>
                <p>Email Id : <span>eCheckin@gmail.com</span></p>
                <p>Address : <span>1 North Bridge Road,8th floor found 8,179094 Califorina</span></p>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ContactUs
