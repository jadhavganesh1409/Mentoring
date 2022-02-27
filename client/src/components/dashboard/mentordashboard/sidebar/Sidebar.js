import './Sidebar.css';
import des_logo from '../../../../static/img/logo.png'
import { BrowserRouter as Router, Route, Routes, Switch , Link} from 'react-router-dom';
import react from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mentorlogout } from '../../../../actions/authmentor';


const Sidebar = ({sidebarOpen, closeSidebar, authmentor:{isAuthenticatedMentor , loading}, mentorlogout}) => {
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
                    <Link to="/mentordashboard">Dashboard</Link>
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
                {/* <div className="sidebar__link">
                    <i className="fa fa-user-graduate"></i>
                    <Link to="menteedashboard/menteeregister">Mentee Management</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a> 
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake"></i>
                    <a href="#">Feedbacks</a>
                </div>  */}
                <h2>Mentoring</h2>
                <div className="sidebar__link">
                    <i className="fa fa-users"></i>
                    <a href="#">Teams</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-comment-alt"></i>
                    <a href="#">Feedback</a>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-file"></i>
                    <a href="#">Reports</a>
                </div>
                {/* <div className="sidebar__link">
                    <i className="fa fa-file"></i>
                    <a href="#">Apply for leave</a>
                </div> */}
                {/* <h2>PAYROLL</h2>
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
                    <Link onClick={mentorlogout} to="/">Logout</Link>
                </div>
            </div>

        </div>
    )
}


Sidebar.propTypes = {
    mentorlogout : PropTypes.func.isRequired,
    authmentor : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authmentor: state.authmentor
});

export default connect(mapStateToProps,{mentorlogout})(Sidebar);