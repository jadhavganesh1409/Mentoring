import React ,{ Fragment, useState }from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import '../../../static/css/Dashboard.css';
import MenteeRegister from '../../auth/MenteeRegister';
import MentorRegister from '../../auth/MentorRegister';
import AdminRegister from '../../auth/AdminRegister';

const AdminDashboard = props => {

    const[sidebarOpen , setSidebarOpen] = useState(false);
  
    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () =>{
        setSidebarOpen(false);
    }
    
    return (
       <div className="container">
          
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="admindashboard/adminregister" element={<AdminRegister/>}/> 
            <Route path="admindashboard/mentorregister" element={<MentorRegister/>}/> 
            <Route path="admindashboard/menteeregister" element={<MenteeRegister/>}/>
        </Routes>
      
      
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
  
        
       </div>
        
        
    );
}

AdminDashboard.propTypes = {

}

export default AdminDashboard
