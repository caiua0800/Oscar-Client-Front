import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 

const PrivateRoute = () => {
    const { token, isInitialized } = useContext(AuthContext);
  
    if (!isInitialized) return null; 

    return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
