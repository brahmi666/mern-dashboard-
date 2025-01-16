import React from 'react'
import Navbar from "./Navbar"
import UserData from "./listChart";
import "./table.css";
import "./style.css";
import Sidebar from './Sidebar';

import Globalsells from "./globalsells";
import Bestseller from "./Bestseller";
import Quantity from './Quantity';

function Tables() {

  return (
    <div class="container-scroller">
      <Sidebar/>
      <div class="container-fluid page-body-wrapper">
          <div class=" col-lg-12 col-12 p-lg-0 ">
          <Navbar/>
          <div class="content-wrapper">
            <div class="page-header">
              Info Tables:
            </div>
            <div class="row">
              <div class="col-lg-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Sold Products</h4>
                    <div>
                      <UserData/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">general stats: </h4>

                            <Quantity/>

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

export default Tables