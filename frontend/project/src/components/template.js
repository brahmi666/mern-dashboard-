import React from 'react'
import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import LineChart from "./LineChart";
import "./table.css";
import "./style.css";
import Globalsells from "./globalsells";
import carda from './carda';
import Sidebar from './Sidebar';

function Template() {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
          
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await fetch("http://localhost:4000/affaire");
        const userDataJson = await userDataResponse.json();

        setUserData({
          labels: userDataJson.map((item) => item.anne),
          datasets: [
            {
              
              label: "earnings",
              data: userDataJson.map((item) => item.affaire),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (


    
    <div class="container-scroller">
      
      <Sidebar/>
      <div class="container-fluid page-body-wrapper">
        <nav class=" col-lg-12 col-12 p-lg-0 ">
        <Navbar/>
        <div class="content-wrapper">
          
        <div class="page-header">
          
            Main Dashboard:
        </div>
        <div class="row">
              <div class="col-xl-3 col-lg-12  grid-margin">
                <div class="row">
                  <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                    <div class="card">
                      <carda/>
                      <card/>
                    </div>
                  </div>
                  </div>
              </div>
              <div class="col-xl-9 stretch-card grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-7">
                        <h5>Business Survey</h5>
                      </div>
                    </div>
                    <div class="row my-3">
                      <div class="col-sm-12">
                        <div class="flot-chart-wrapper">
                          <div id="flotChart" class="flot-chart">
                          <div style={{ }}>
                                <div style={{  }}>
                                  <LineChart chartData={userData} />
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
          <div>
        </div>
      </div>
    </nav>
  </div>
</div>
    )
}
export default Template