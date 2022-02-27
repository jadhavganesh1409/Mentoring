import React , { Fragment , useState }from 'react';
import { connect } from 'react-redux';
import '../../static/css/Register.module.css';
import axios from 'axios';

import { setAlert } from '../../actions/alert';

import PropTypes from 'prop-types';

import Alert from '../homepage/Alert';
import { mentorregister } from '../../actions/authmentor';

const MentorRegister = ({ setAlert ,mentorregister}) => {

    const [ formData, setFormData] = useState({
        first_name:'',
        middle_name:'',
        last_name:'',
        email:'',
        current_academic_year:'',
        degree:'',
        faculty:'',
        department:'',
        group:'',
        des_id:'',
        mobile:'',
        whatsapp:'',
        password:'',
        password2:''
    });

    const { first_name, middle_name, last_name, email, current_academic_year, degree, faculty, department, group,des_id,mobile,whatsapp, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        const password = 'Mentor@123';
        e.preventDefault();
        mentorregister({first_name, middle_name, last_name, email, current_academic_year, degree, faculty, department, group,des_id,mobile,whatsapp, password});
        // if(password !== password2){
        //     setAlert('Passwords does not match','danger');
        // }
        // else{
        //     console.log('SUCESS');
            
            
        // }
    };

    return (
        <div>
            {/* <h1 className="large text-primary">Sign Up</h1> */}
            <section className="container-add">
            {/* <form action="/AddMentee">
                <label>Add mentors from File</label><br/>
                <input type="file" id="myFile" name="filename" accept=".csv" className="btn btn-primary"/>
                <input type="submit" className="btn btn-primary" value="Upload"/>
            </form> */}
            <Alert/>
            
            <p className="lead">
            <i className="fas fa-user" /> Add New Mentor
            </p>
            <form className="form" onSubmit={ e => onSubmit(e)}>
            <label>Name</label>
            <div className="form-group">
                <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                onChange={e => onChange(e)}
                />
                <br></br>
                <input
                type="text"
                placeholder="Middle Name"
                name="middle_name"
                value={middle_name}
                onChange={e => onChange(e)}
                />
                <br></br>
                <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                onChange={e => onChange(e)}
                />
                {/* <small className="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
                </small> */}

            </div>

            <label>Email</label>
            <div className="form-group">
                <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                />
                {/* <small className="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
                </small> */}
            </div>
            
            <label>Academic Year</label>
            <div className="form-group">
            <select name="current_academic_year" id="current_academic_year"  value={current_academic_year} onChange={e => onChange(e)}>
                <option value="">Select Year</option>
                <option value="2021-22">2021-22</option>
                <option value="2022-23">2022-23</option>
            </select>
            </div>

            <label>Degree</label>
            <div className="form-group">
            <select name="degree" id="degree"  value={degree} onChange={e => onChange(e)}>
                <option value="">Select Degree</option>
                <option value="Under Graduation">Under Graduation(UG)</option>
                <option value="Post Graduation">Post Graduation(PG)</option>
            </select>
            </div>
            
            <label>Faculty</label>
            <div className="form-group">
            <select name="faculty" id="faculty"  value={faculty} onChange={e => onChange(e)}>
                <option value="">Select Faculty</option>
                <option value="Arts" >Arts</option>
                <option value="Science">Science</option>
            </select>
            </div>
            
            <label>Department</label>
            <div className="form-group">
            <select name="department" id="department" value={department} onChange={e => onChange(e)}>
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
            </select>
            </div>

            
            
            <label>Mobile No.</label>
            <div className="form-group">
                <input
                type="text"
                placeholder="Mobile No."
                name="mobile"
                value={mobile}
                onChange={e => onChange(e)}
                />
            </div>

            <label>Whatsapp No.</label>
            <div className="form-group">
                <input
                type="text"
                placeholder="Whatsapp No."
                name="whatsapp"
                value={whatsapp}
                onChange={e => onChange(e)}
                />
            </div>

            <label>Group</label>
            <div className="form-group">
                <input
                type="text"
                placeholder="Group"
                name="group"
                value={group}
                onChange={e => onChange(e)}
                />
            </div>

            <label>Des Id</label>
            <div className="form-group">
                <input
                type="email"
                placeholder="DES id"
                name="des_id"
                value={des_id}
                onChange={e => onChange(e)}
                />
            </div>

            {/* <label>Password</label>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                />
            </div>

            <label>Confirm Password</label>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                /> 
            </div>*/}
            <input type="submit" className="btn btn-primary" value="Add" />
            </form>
            {/* <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
            </p>    */}
            </section>
        </div>
    )
}

MentorRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register : PropTypes.func.isRequired,
}

export default connect(null,{ setAlert , mentorregister})(MentorRegister);