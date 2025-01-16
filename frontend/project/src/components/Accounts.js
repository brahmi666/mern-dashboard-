import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounts = () => {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchAllTab = async () => {
      try {
        const res = await axios.get('http://localhost:4000/comptes');
        setTab(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTab();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this account?');

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/admin/${id}`);
        // After successful deletion, update the account list
        const updatedTab = tab.filter((cl) => cl.id !== id);
        setTab(updatedTab);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
    <table border="1">
        <thead>
        <tr>
        <th><p>nom</p></th>
        <th><p>prenom</p></th>
        <th><p>mail</p></th>
        <th><p>password</p></th>
        <th><p>Delete?</p></th>
        </tr>
        </thead>
        <tbody>
        {tab.map((cl) => (
        <tr key={cl.id}>
                <td><p>{cl.nom}</p></td>
            <td><p>{cl.prenom}</p></td>
            <td><p>{cl.mail}</p></td>
            <td><p>{cl.mdp}</p></td>
            <td><button onClick={() => handleDelete(cl.id)}>Delete</button></td>
        </tr>
        ))
    }
            </tbody>
        </table>
    </div>
);
};

export default Accounts;
