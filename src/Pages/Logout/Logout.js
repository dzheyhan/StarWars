import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
  localStorage.setItem('token', null);
  return <Redirect to="/login" />;
}

export default Logout;
