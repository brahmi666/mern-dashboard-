import React from 'react'
import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "./table.css";
import "./style.css";

import Sidebar from './Sidebar';
import ProductTable from './ProductTable';

function Charts() {
  
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Stock",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "orange",
          "pink",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await fetch("http://localhost:4000/stock");
        const userDataJson = await userDataResponse.json();

        setUserData({
          labels: userDataJson.map((item) => item.nom),
          datasets: [
            {
              
              label: "Stock",
              data: userDataJson.map((item) => item.qnt),
              
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
          <div class=" col-lg-12 col-12 p-lg-0 ">
          <Navbar/>
          <div class="content-wrapper">
            <div class="page-header">
            Charts:
            </div>
            <div class="row">
              <div class="col-lg-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Stock:</h4>
                    <div >
                    <BarChart  chartData={userData} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Bar chart</h4>
                    <div style={{ height: 300 }}>
                  <PieChart chartData={userData} />
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Stock Table</h4>
                    <div>
                      <ProductTable/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Doughnut chart</h4>
                    <div>
                    <BarChart chartData={userData} />
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

export default Charts