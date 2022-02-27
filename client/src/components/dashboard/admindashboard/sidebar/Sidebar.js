import './Sidebar.css';
import des_logo from '../../../../static/img/logo.png'
import { BrowserRouter as Router, Route, Routes, Switch , Link} from 'react-router-dom';
import react from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { adminlogout } from '../../../../actions/authadmin';


const Sidebar = ({sidebarOpen, closeSidebar, authadmin:{isAuthenticatedAdmin , loading}, adminlogout}) => {
    let isActive;
    let linkClasses = ["","active_menu_link"]
    
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={des_logo} alt="logo"/>
                    <h1>Mentoring</h1>
                </div>
                <i className="fa fa-times" id="sidebarICon" onClick={()=> closeSidebar()}></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu__link">
                    <i className="fa fa-home"></i>
                    <Link to="/admindashboard">Dashboard</Link>
                </div>
                <h2>Your Account</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <Link to="#!">Profile</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cog"></i>
                    <Link to="#!">Settings</Link>
                </div>
                <h2>USERS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <Link to="admindashboard/adminregister">Admin Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-chalkboard-teacher"></i>
                    <Link to="admindashboard/mentorregister">Mentor Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-graduate"></i>
                    <Link to="admindashboard/menteeregister">Mentee Management</Link>
                </div>
                {/* <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a> 
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>  */}
                <h2>REPORTS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Reports</a>
                </div>
                {/* <div className="sidebar__link">
                    <i className="fas fa-sign-out-alt"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-calendar-week"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fas fa-rupee-sign"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                     <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a> 
                </div> */}
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <Link onClick={adminlogout} to="/">Logout</Link>
                </div>
            </div>

        </div>
    )
}


Sidebar.propTypes = {
    adminlogout : PropTypes.func.isRequired,
    authadmin : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authadmin: state.authadmin
});

export default connect(mapStateToProps,{adminlogout})(Sidebar);