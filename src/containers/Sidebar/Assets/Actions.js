import React from 'react';
import '../../app.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import Index from '../../Content/Pages/Index/Index';

export default function Actions(){

    return(
        <div>
            <div className="sidebar-heading">Actions</div>
                    <li className="nav-item nav-item active">
                        <div className="nav-link collapsed">
                            <i className="fas fa-fw fa-folder"></i>
                            <Link to="/AllProducts"><span className="nav-link">All Products</span></Link>
                        </div>
                    </li>
                    <li className="nav-item nav-item active">
                        <div className="nav-link collapsed">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <Link to="/AllRutines"><span className="nav-link">All Rutines</span></Link>
                        </div>
                    </li>
                    <li className="nav-item nav-item active">
                        <div className="nav-link collapsed">
                            <i className="fas fa-fw fa-table"></i>
                            <Link to="/AllUsers"><span className="nav-link">All Users</span></Link>
                        </div>
                    </li>
        </div>
    );

}


