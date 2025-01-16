import React from 'react';

function LogoutButton({ handleLogout }) {
  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
