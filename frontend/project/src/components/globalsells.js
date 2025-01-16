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
        <h3>Total Earnings</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {Tab.map((cl) => (
            <div key={cl.tot_earns}>
              <h4>{cl.tot_earns} TND</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // ...
  

export default Globalsells;
