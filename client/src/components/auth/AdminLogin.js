import React,{useState} from 'react';
import { Link , Navigate} from 'react-router-dom';
import des_logo from '../../static/img/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { adminlogin } from '../../actions/authadmin';

import Alert from '../homepage/Alert';

const AdminLogin = ({ adminlogin , isAuthenticatedAdmin}) => {

    const [ formData, setFormData] = useState({
        
        email:'',
        password:'',
    });
    const { email,  password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        adminlogin(email,password);
        
    };

    // Redirect if login
    console.log('Value---->'+isAuthenticatedAdmin);
    if(isAuthenticatedAdmin){
        return <Navigate to="/admindashboard"/>;
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
            <div className='secondary'>
                <div className="login-form">
                    <Alert/>
                    <h3>Admin Login</h3>
                    <form onSubmit={ e => onSubmit(e)}>
					<i className="fa fa-user icon"></i>&nbsp;
					<label>User Name</label>
					<input type="text" name="email" value={email} onChange={e => onChange(e)}/>
					<i className="fa fa-lock"></i>&nbsp;
					<label>Password</label>
					<input type="password" name="password" value={password} onChange={e => onChange(e)}/>
					<input type="submit" value="Login"/> 
				</form>
				<h4>
                    <Link to="#!">Forget User Name/Password ?</Link>
                </h4>
				<div className="h3sub">
                    <h4>
                        <Link to="#!">Back to Home</Link>
                        </h4>
                </div>
                </div>
            </div>
        </div>
        
    )
}
AdminLogin.propTypes={
    adminlogin:PropTypes.func.isRequired,
    isAuthenticatedAdmin : PropTypes.bool,
};

const mapStateToProps = state =>({
    isAuthenticatedAdmin : state.authadmin.isAuthenticatedAdmin
});

export default connect(mapStateToProps,{adminlogin})(AdminLogin);