import React from 'react'
import "./table.css";
import "./style.css";
import Globalsells from "./globalsells";
import Bestseller from "./Bestseller";
import Quantity from './Quantity';
import Accounts from './Accounts';

function Admin() {
    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:4000/logout', {
                method: 'POST'
            });

            if (response.ok) {
                // Redirect to the login page after successful logout
                window.location.href = '/';
            } else {
                alert('Failed to logout');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred while logging out');
        }
    };

return (


    
    <div class="container-scroller">
      
      <div class="container-fluid page-body-wrapper">
        <nav class=" col-lg-12 col-12 p-lg-0 ">
        <div class="content-wrapper">
          
        <div class="page-header">
          
            Admin Board :
            <div class="nav-link">
        <div class="mt-4">
            <button onClick={handleLogout}>
                Logout
            </button>
            
        </div>
        </div>
        </div>
        <div class="row">
              <div class="col-xl-3 col-lg-12 stretch-card grid-margin">
                <div class="row">
                  <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                      <Globalsells/>   
                  </div>
                  <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3">
                    <Bestseller/> 
                  </div>
                  <div class="col-xl-12 col-md-6 stretch-card grid-margin grid-margin-sm-0 pb-sm-3 pb-lg-0 pb-xl-3">
                      <Quantity/>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 stretch-card grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-7">
                        <h5>Accounts</h5>
                      </div>
                    </div>
                    <div class="row my-3">
                      <div class="col-sm-12">
                        <div class="flot-chart-wrapper">
                        <Accounts/>

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
    )}
    export default Admin
