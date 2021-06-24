import React from 'react'
import './Detail.css'
function Detail() {
    return (
        <div className="DetailSection">
         <div className="row-8 d-flex flex-column p-5 align-items-center text-center">
        <h2 id='heading'>From startup to enterprice</h2>
        <p>Whether you're a growing or enterprise brand,a<br />
        boutique or veteran agency,the eCheckin is suitable to every enviroment.</p>
        </div>
        <div className="line"></div>
        <div className="row-8 d-flex flex-column p-5 align-items-center text-center ">
        <h2 id='heading'>Let's build the future of the workplace,together!</h2>
        <p>By referring potential clients or by becoming a reseller We're committed to<br />partnerships that provide value to the customers.</p>
        </div>
        <div className="partner d-flex flex-column p-5 align-items-center text-center">
            <h2 id='heading'>Become a partner</h2>
            <div id="prtnrLogo">Proxyclick</div>
            <div className="Rating">
                <div className="star">
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                <i class='fa fa-star'></i>
                </div>
                <h2 className="count">4</h2>
            </div>
            <button type="button" class="btn btn-warning  rounded-pill text-light mt-3">Learn More</button>
        </div>
        </div>
    )
}

export default Detail
