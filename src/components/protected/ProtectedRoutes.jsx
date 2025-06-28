import React from 'react';
import {Navigate, Outlet} from "react-router";

const ProtectedRoutes = () => {
    const token = sessionStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoutes;