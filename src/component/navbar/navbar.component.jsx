import './navbar.component.css';
import React from 'react';
import {Link} from "react-router-dom";


const NavbarComponent = () => {
    return(
       <React.Fragment>
           <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <div className="container-fluid">
                           <Link to='/' className="navbar-brand">Counters</Link>

                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                               data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                               aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse" id="navbarNav">
                           <ul className="navbar-nav ml-auto">
                               <li className="nav-item">
                                   <Link to='/' className="nav-link active">Home</Link>
                               </li>
                               <li className="nav-item">
                                   <Link to='/shop' className="nav-link">Shop</Link>
                               </li>
                               <li className="nav-item">
                                   <Link to='/contact' className="nav-link">Contact</Link>
                               </li>
                               <li className="nav-item">
                                   <Link to='/help' className="nav-link">Help</Link>
                               </li>
                           </ul>
                       </div>
                   </div>
               </nav>
           </div>
       </React.Fragment>
    );
}


export default NavbarComponent;
