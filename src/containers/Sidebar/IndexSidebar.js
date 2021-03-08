import React from 'react';
import '../../App.css';

import BrandIcon from './Assets/BrandIcon';
import Actions from './Assets/Actions';
import Dashboard from './Assets/Dashboard';

export default function Sidebar(){
	return(
		<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			<BrandIcon />
			<hr className="sidebar-divider my-0" />
			<Dashboard />
			<hr className="sidebar-divider my-0" />
			<br/> 
			<Actions />
			<hr className="sidebar-divider d-none d-md-block" />	
		</ul>
	)
}

