//import logo from './logo.svg';
//import './App.css';
import React, { Fragment, useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// // import MenteeLogin from './components/auth/MenteeLogin';
// import './static/css/HomePage.css';
// import MenteeRegister from './components/auth/MenteeRegister';
// import MentorRegister from './components/auth/MentorRegister';
//import Alert from './components/homepage/Alert';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import SideMenu from './components/homepage/SideMenu';
import MenteeLogin from './components/auth/MenteeLogin';
import MentorLogin from './components/auth/MentorLogin';
import AdminLogin from './components/auth/AdminLogin';


// import Dashboard from './components/dashboard/Dashboard';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Dashboard
import AdminDashboard from './components/dashboard/admindashboard/AdminDashboard';
import MenteeDashboard from './components/dashboard/menteedashboard/MenteeDashboard';
import MentorDashboard from './components/dashboard/mentordashboard/MentorDashboard';
// import MenteeRegister from './components/auth/MenteeRegister';
// import Main from './components/dashboard/menteedashboard/main/Main';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  // useEffect(() =>{
  //   store.dispatch(loadUser());
  // },[]);
  
   return  ( 
  <Provider store={store}>
    <Router>
      <Fragment>
      
                      
          {/* <Dashboard/>   */}
          
            <Routes> 
                <Route path="/" element={<SideMenu />} /> 
                <Route  path="/MenteeLogin" element={<MenteeLogin />} /> 
                <Route  path="/MentorLogin" element={<MentorLogin />} /> 
                <Route  path="/AdminLogin" element={<AdminLogin />} />
                <Route  path="/admindashboard/*" element={<AdminDashboard/>}/>
                <Route  path="/menteedashboard/*" element={<MenteeDashboard/>}/>
                <Route  path="/mentordashboard" element={<MentorDashboard/>}>
                </Route>
                
            </Routes>        
      </Fragment>
    </Router>
  </Provider>
  
);
}

export default App;
