import './Sidebar.css';
import des_logo from '../../../../static/img/logo.png'
import { BrowserRouter as Router, Route, Routes, Switch , Link} from 'react-router-dom';
import react from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { menteelogout } from '../../../../actions/auth';


const Sidebar = ({sidebarOpen, closeSidebar, auth:{isAuthenticated , loading}, menteelogout}) => {
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
                    <Link to="/menteedashboard">Dashboard</Link>
                </div>
                <h2>Your Account</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <Link to="#!">Profile</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-chalkboard-teacher"></i>
                    <Link to="#!">Mentor Team</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-graduate"></i>
                    <Link to="#!">Mentoring Modules</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Feedback</a> 
                </div>
                {/* <div className="sidebar__link">
                    <i className="fa fa-handshake"></i>
                    <a href="#">Contracts</a>
                </div>  */}
                {/* <h2>REPORTS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
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
                    <Link onClick={menteelogout} to="/menteelogin">Logout</Link>
                </div>
            </div>

        </div>
    )
}


Sidebar.propTypes = {
    menteelogout : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{menteelogout})(Sidebar);