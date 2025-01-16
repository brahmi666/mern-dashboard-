import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchAllTab = async () => {
      try {
        const res = await axios.get('http://localhost:4000/affichage');
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
        <th><p>id</p></th>
        <th><p>Libelle</p></th>
        <th><p>Prix Unitaire</p></th>
        <th><p>Quantité vendu</p></th>
        <th><p>année de vente</p></th>
        </tr>
        </thead>
        <tbody>
        {tab.map((cl) => (
        <tr key={cl.id}>
                <td><p>{cl.id}</p></td>
            <td><p>{cl.libelle}</p></td>
            <td><p>{cl.prix_unitaire}</p></td>
            <td><p>{cl.qte_vendu}</p></td>
            <td><p>{cl.anne}</p></td>
        </tr>
        ))
    }
            </tbody>
        </table>
    </div>
);
};

export default UserData;
