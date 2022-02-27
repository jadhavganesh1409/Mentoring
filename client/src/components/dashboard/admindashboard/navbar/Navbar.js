import './Navbar.css';
import React from 'react';

const Navbar = ({sidebarOpen, openSidebar}) =>{
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            
            <div className="navbar__left">
                <a className="active_link" href="#">Admin Dashboard</a>
                {/* <a href="#">Video ManageMent</a>
                <a className="active_link" href="#">Admin</a> */}
            </div>
            <div className="navbar__right">
                {/* <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock"></i>
                </a> */}
                <a href="#">
                   <img width="30px" src="" alt="avatar"/>
                </a>


            </div>
            
        </nav>
    );
};





export default Navbar;