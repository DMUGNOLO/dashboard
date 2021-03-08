import logo from './logo.svg';
import './containers/app.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import BrandIcon from './containers/Sidebar/Assets/BrandIcon';
import Dashboard from './containers/Sidebar/Assets/Dashboard';
  

import IndexNavbar from './containers/Navbar/IndexNavbar';
import Index from './containers/Content/Pages/Index/Index';
import IndexFooter from './containers/Footer/IndexFooter';
import AllProductsIndex from './containers/Content/Pages/AllProducts/AllProductsIndex';
import AllRutinesIndex from './containers/Content/Pages/AllRutines/AllRutinesIndex';
import AllUsersIndex from './containers/Content/Pages/AllUsers/AllUsersIndex';

export default function App() {
  return (
    <div id="wrapper">
      <Router>

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <BrandIcon />
          <hr className="sidebar-divider my-0" />
          <Dashboard />
          <hr className="sidebar-divider my-0" />
          <br/> 
          <div>
          <div className="sidebar-heading">Actions</div>
                  <li className="nav-item nav-item active">
                      <div className="nav-link collapsed">
                          <i className="fas fa-box-open"></i>
                          <Link to="/AllProducts"><span className="nav-link">All Products</span></Link>
                      </div>
                  </li>
                  <li className="nav-item nav-item active">
                      <div className="nav-link collapsed">
                          <i className="fas fa-dumbbell"></i>
                          <Link to="/AllRutines"><span className="nav-link">All Rutines</span></Link>
                      </div>
                  </li>
                  <li className="nav-item nav-item active">
                      <div className="nav-link collapsed">
                          <i className="fas fa-users"></i>
                          <Link to="/AllUsers"><span className="nav-link">All Users</span></Link>
                      </div>
                  </li>
          </div>
          <hr className="sidebar-divider d-none d-md-block" />	
        </ul>

        <Switch>
          <Route exact path="/">
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <IndexNavbar />
                <div className="container-fluid">
                    <Index />
                </div>
              </div>
              <IndexFooter />
            </div>
          </Route>

          <Route exact path="/AllProducts">
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <IndexNavbar />
                <div className="container-fluid">
                  <AllProductsIndex />
                </div>
              </div>
              <IndexFooter />
            </div>
          </Route>

          <Route exact path="/AllRutines">
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <IndexNavbar />
                <div className="container-fluid">
                  <AllRutinesIndex />
                </div>
              </div>
              <IndexFooter />
            </div>
          </Route>

          <Route exact path="/AllUsers">
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <IndexNavbar />
                <div className="container-fluid">
                  <AllUsersIndex />
                </div>
              </div>
              <IndexFooter />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

