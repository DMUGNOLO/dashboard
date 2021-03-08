import React from 'react';
import '../../app.css';

function UserInfo() {
    
    return(
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                <img className="img-profile rounded-circle" src="./images/default_avatar.jpg" width="60"></img>
            </a>
        </li>
    );
}

export default UserInfo;