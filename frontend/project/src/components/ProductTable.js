import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchAllTab = async () => {
      try {
        const res = await axios.get('http://localhost:4000/stock');
        setTab(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTab();
  }, []);

return (
    <div>
    <table border="1">
        <thead>
        <tr>
        <th><p>nom</p></th>
        <th><p>description</p></th>
        <th><p>Prix Unitaire</p></th>
        <th><p>Quantité Restante</p></th>
        </tr>
        </thead>
        <tbody>
        {tab.map((cl) => (
        <tr key={cl.nom}>
                <td><p>{cl.nom}</p></td>
            <td><p>{cl.description}</p></td>
            <td><p>{cl.prix}</p></td>
            <td><p>{cl.qnt}</p></td>
        </tr>
        ))
    }
            </tbody>
        </table>
    </div>
);
};

export default ProductTable;
