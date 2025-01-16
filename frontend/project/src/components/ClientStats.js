import React from 'react'
import Navbar from "./Navbar"
import UserData from "./listChart";
import "./table.css";
import "./style.css";
import Sidebar from './Sidebar';
import Clients from './Clients';

function ClientStats() {

  return (
    <div class="container-scroller">
      <Sidebar/>
      <div class="container-fluid page-body-wrapper">
          <div class=" col-lg-12 col-12 p-lg-0 ">
          <Navbar/>
          <div class="content-wrapper">
            <div class="page-header">
              Info Clients:
            </div>
              <div class="col-lg-12 grid-margin stretch-card">
              <div class="container">
        <div class="card">
            <div class="card-inner">
                <div class="front">
                <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                    <div class="row">
                    <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                    <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                    </div>
                    <div class="row card-no">
                        <p>5244</p>
                        <p>2150</p>
                        <p>8252</p>
                        <p>6420</p>
                    </div>
                    <div class="row card-holder">
                        <p>CARD HPLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div class="row name">
                        <p>JOE ALISON</p>
                        <p>10 / 25</p>
                    </div>
                </div>
                <div class="back">
                <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                    <div class="bar"></div>
                    <div class="row card-cvv">
                        <div>
                        <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                        </div>
                        <p>824</p>
                    </div>
                    <div class="row card-text">
                        <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
                    </div>
                    <div class="row signature">
                        <p>CUSTOMER SIGNATURE</p>
                        <span> <img src="assets/images/poste.png" alt="logo" width={80} /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ClientStats