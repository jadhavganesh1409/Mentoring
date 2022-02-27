import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch , Link, Navigate} from 'react-router-dom';
import des_logo from '../../static/img/des_logo.png';
// import MenteeLogin from '../auth/MenteeLogin';
// import MentorLogin from '../auth/MentorLogin';
// import AdminLogin from '../auth/AdminLogin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../static/css/HomePage.css';
// import { menteelogout } from '../../actions/auth';

const SideMenu = ({ auth:{isAuthenticated , loading} }) => {

    if(isAuthenticated){
        return <Navigate to="/menteedashboard"/>;
    }
    return (
        <div className="container-home">
            <div className="menu">
                <h3>Deccan Education Society's</h3>
                <img className="company-logo" src={des_logo} alt="IMG NOT FOUND"/>
                <h2>FERGUSSON COLLEGE PUNE</h2>
                <h1 className="site-title">MENTORING</h1>
                <div className="login-tos">
                    <ul>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/MenteeLogin">Mentee / Student Login</Link></li>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/MentorLogin">Mentor / Teacher Login</Link></li>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/AdminLogin">Admin Login</Link></li> 
                    </ul>
                </div>
            </div>
            <div className="secondary">
            {/* <Routes> 
                <Route  path="/MenteeLogin" element={<MenteeLogin />} /> 
                <Route  path="/MentorLogin" element={<MentorLogin />} /> 
                <Route  path="/AdminLogin" element={<AdminLogin />} />    
            </Routes> */}
           </div>
           {/* <div>&copy;Fergusson college-2021</div> */}
        </div>
        
    );
};

SideMenu.propTypes ={
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    auth:state.auth
});
export default connect(mapStateToProps)(SideMenu);