import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quantity = () => {
    const [Tab, setTab] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchAllTab = async () => {
        try {
        const res = await axios.get('http://localhost:4000/soldproducts');
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
    <div className='quantity'>
        <h3>Sold Products:</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
        {Tab.map((cl) => (
            <div key={cl.libelle}>
            <h4>{cl.quantity} Products</h4>
            </div>
        ))}
        </div>
    </div>
    );
};
export default Quantity;
