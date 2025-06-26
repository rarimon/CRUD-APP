import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const MainLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;