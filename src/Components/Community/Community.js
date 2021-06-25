import React from 'react'
import './Community.css'
function Community() {
    return (
        <div id='Community' className="container-fluid">
     <div className="row"  style={{height:'350px'}} >
       <div className="container p-4 d-flex flex-column justify-content-center align-items-center text-center" >
          <h2 id='heading'>Why leading companies & organisations<br/>choose eChecking </h2>
          <div className="row-12 CommunityiIcon">
              <div className="col-3 flex-column  d-flex align-items-center justify-content-center">
              <div className="crcl">
              <i class="fas fa-user-shield"></i>
              </div><p id='txt'>Accepted by many Government institutions & coporates</p>
              </div>
              <div className="col-3 flex-column d-flex align-items-center justify-content-center">
              <div className="crcl">
              <i class="fas fa-tools"></i>
              </div><p id='txt'>Work with tools your team already uses for seamless implementations.</p>
              </div>
              <div className="col-3 flex-column d-flex align-items-center justify-content-center">
              <div className="crcl">
              <i class="fas fa-headphones-alt"></i>
              </div><p id='txt'>Count on our industry-leading customer Success team</p>
              </div>
              <div className="col-3  flex-column  d-flex align-items-center justify-content-center">
              <div className="crcl">
              <i class="fas fa-shield-alt"></i>
              </div><p id='txt'>We take it very seriously,all the data is encrypted and stored in a secured server.</p>
              </div>
          </div>
       </div>
     </div>
     <div  className="row p-5  d-flex flex-column align-items-center justify-content-center"  >
     <div>
     <p style={{fontSize:'23px',fontWeight:'500',color:'#424242'}} >eCheckin has elevated visitor management well<br />
     beyond the simple act of registeation and <br /> incorporated notions of security, health and safety,<br />
     brand promotion, customer communication and privacy<br /></p>
     <p>Mark Hill</p>
     <p>Director of Digital,innovation and transformation</p>
     </div>
     </div>
 </div>
    )
}

export default Community
