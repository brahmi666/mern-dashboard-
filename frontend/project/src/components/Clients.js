import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ...

const Clients = () => {
    const [Tab, setTab] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchAllTab = async () => {
        try {
          const res = await axios.get('http://localhost:4000/client');
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
      <div className='clients'>
        <h3>Total Users Number: </h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          {Tab.map((cl) => (
            <div key={cl.nbr_client}>
              <h4>{cl.nbr_client} Clients</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // ...
  

export default Clients;
