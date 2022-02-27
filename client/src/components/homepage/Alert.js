import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>{
    const mystyle = {
        color: "red",
        // backgroundColor: "red",
        padding: "10px",
        fontFamily: "Arial",
        textAlign:'center'
    };
    return(
    alerts!== null && alerts.length > 0 && alerts.map(alert=>(
    <div style={mystyle} key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
    ))
    );
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state =>({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
