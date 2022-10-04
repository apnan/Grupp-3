import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  let loggedIn = useSelector((state) => state.isLoggedIn);

  return loggedIn ? <Outlet /> : <Navigate to={'/login'}></Navigate>;
};

export default ProtectedRoutes;
