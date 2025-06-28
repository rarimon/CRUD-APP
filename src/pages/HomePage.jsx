import React from 'react';
import MainLayout from "../layouts/MainLayout.jsx";

const HomePage = () => {
    return (
        <MainLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Welcome To Dashboard</h1>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;