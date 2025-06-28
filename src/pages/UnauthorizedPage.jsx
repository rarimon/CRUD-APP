import React from 'react';
import MainLayout from "../layouts/MainLayout.jsx";
import {Navigate, NavLink} from "react-router";

const UnauthorizedPage = () => {
    return (
        <MainLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="text-danger">এই পেইজে এক্সেস করতে হলে প্রথমে লগইন করতে হবে।</p>
                        <NavLink to={"/login"} className="btn btn-warning">Login Page</NavLink>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default UnauthorizedPage;