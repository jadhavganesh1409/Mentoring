import React , { Fragment , useState }from 'react';
import { connect } from 'react-redux';
import '../../static/css/Register.module.css';
import axios from 'axios';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import PropTypes from 'prop-types';

import Alert from '../homepage/Alert';

const MenteeRegister = ({ setAlert, register }) => {

    const [ formData, setFormData] = useState({
        first_name:'',
        middle_name:'',
        last_name:'',
        email:'',
        current_academic_year:'',
        degree:'',
        faculty:'',
        studying_at:'',
        roll_no:'',
        division:'',
        group:'',
        des_id:'',
        mobile:'',
        whatsapp:'',
    });

    const { first_name, middle_name, last_name, email, current_academic_year, degree, faculty, studying_at,roll_no,division, group,des_id,mobile,whatsapp } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        const password = 'Mentee@123';
        e.preventDefault();
        register({first_name, middle_name, last_name, email, current_academic_year, degree, faculty, studying_at,roll_no,division, group,des_id,mobile,whatsapp,password});           
    };

    

    return (
        <div>
            {/* <h1 className="large text-primary">Sign Up</h1> */}
            <section className="container-add">
            {/* <form action="/AddMentee">
                <label>Add mentees from File</label><br/>
                <input type="file" id="myFile" name="filename" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" className="btn btn-primary"/>
                <input type="submit" className="btn btn-primary" value="Upload"/>
            </form> */}
            <Alert/>
            <p className="lead">
            <i className="fas fa-user" /> Add New Mentee
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
            
            <label>Studying Year</label>
            <div className="form-group">
            <select name="studying_at" id="studying_at" value={studying_at} onChange={e => onChange(e)}>
                <option value="">Select Year</option>
                <option value="First Year">First Year(FY)</option>
                <option value="Second Year">Second Year(SY)</option>
                <option value="Third Year">Third Year(TY)</option>
            </select>
            </div>

            <label>Roll No.</label>
            <div className="form-group">
                <input
                type="text"
                placeholder="Roll No"
                name="roll_no"
                value={roll_no}
                onChange={e => onChange(e)}
                />
            </div>
            
            <label>Division</label>
            <div className="form-group">
            <select name="division" id="division" value={division} onChange={e => onChange(e)}>
                <option value="">Select Divsion</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
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
            </div> */}
            <input type="submit" className="btn btn-primary" value="Add" />
            </form>
            </section>
        </div>
    )
}

MenteeRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register : PropTypes.func.isRequired,
}

export default connect(null,{ setAlert, register })(MenteeRegister);