import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
  
  const {currentUser}= useSelector(state=>state.user);

  return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute