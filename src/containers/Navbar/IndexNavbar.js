import React from 'react';
import '../../App.css';

import Alert from './Assets/Alert';
import Message from './Assets/Message';
import UserInfo from './Assets/UserInfo';

function Navbar(){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                <Alert />
                <Message />       

                <div className="topbar-divider d-none d-sm-block"></div>

                <UserInfo />

            </ul>
        </nav> 
    )
}

export default Navbar;