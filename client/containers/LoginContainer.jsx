import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from '../components/Login.jsx'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => { 
  return { 
    loginHandler: (data) => { 
      console.log('HIHIHI', data);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);