import React from 'react'

function Sidebar() {
    
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
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <div class="text-center sidebar-brand-wrapper d-flex align-items-center">
    </div>
    <ul class="nav">
    <li class="nav-item nav-profile">
        <a href="/" class="nav-link">
        <div class="nav-profile-image">
            <img src="assets/images/faces/face1.jpg" alt="profile" />
            <span class="login-status online"></span>
        </div>
        <div class="nav-profile-text d-flex flex-column pr-3">
            <span class="font-weight-medium mb-2">Guest</span>
            <span class="font-weight-normal">$$$</span>
        </div>
        <span class="badge badge-danger text-white ml-3 rounded">$</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/dashboard">
        <i class="mdi mdi-home menu-icon"></i>
        <span class="menu-title">Brief</span>
        </a>
    </li>
    
    <li class="nav-item">
        <a class="nav-link" href="/graph">
        <i class="mdi mdi-table-large menu-icon"></i>

        <span class="menu-title">Stock</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/table">
        <i class="mdi mdi-chart-bar menu-icon"></i>
        <span class="menu-title">Sales</span>
        </a>
    </li>
    <li class="nav-item">
        
        <a class="nav-link" href="/clients">
        <i class="mdi mdi-contacts menu-icon"></i>
        <span class="menu-title">Clients
        </span>
        </a>
    </li>
    
    
    <li class="nav-item sidebar-actions">
        <div class="nav-link">
        <div class="mt-4">
            <ul class="mt-4 pl-0">
            <li onClick={handleLogout}>
                Logout
            </li>
            
            </ul>
        </div>
        </div>
    </li>
    </ul>
</nav>
)
}

export default Sidebar