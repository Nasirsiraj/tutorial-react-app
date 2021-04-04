import './navbar.component.css';
import React, {Component} from 'react';


const NavbarComponent = ({totalCounters}) => {
    console.log('navbar rendered');
    return(
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Counters: {totalCounters}</span>
                    </div>
                </nav>
            </div>
        </div>
    );
}


export default NavbarComponent;
