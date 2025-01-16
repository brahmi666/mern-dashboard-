import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ...

const Globalsells = () => {
    const [Tab, setTab] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchAllTab = async () => {
        try {
          const res = await axios.get('http://localhost:4000/globalsells');
          setTab(res.data);
          setLoading(false);
        } catch (err) {
          console.error(err);
          setError('Error fetching data');
          setLoading(false);
        }
      };
  
      fetchAllTab();
    }, []);
  
    return (
      <div className='globalsells'>
        <div class="d-flex justify-content-center container text-white mt-5">
        <div class="card p-2 px-3 py-3">
            <div class="d-flex justify-content-between align-items-center"><img src="https://i.imgur.com/8ANWXql.png" width="20" height="20"><img src="https://i.imgur.com/SsTSozr.png" width="40"></div>
            <div class="mt-3"><span class="mr-3">****</span><span class="mr-3">****</span><span class="mr-3">****</span><span class="mr-2">5513</span></div>
            <div class="d-flex justify-content-between card-details mt-3 mb-3">
                <div class="d-flex flex-column"><span class="light">Card Holder</span><span>Sam Dingo</span></div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column mr-3"><span class="light">Expired</span><span>12/24</span></div>
                    <div class="d-flex flex-column"><span class="light">CVV</span><span>857</span></div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  };
  
  // ...
  

export default Globalsells;
