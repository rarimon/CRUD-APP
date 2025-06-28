import React, {Profiler} from 'react';
import MainLayout from "./layouts/MainLayout.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoutes from "./components/protected/ProtectedRoutes.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import {Flip, Slide, ToastContainer} from "react-toastify";

const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/unauthorized" element={<UnauthorizedPage />} />


                    {/* 🔐 Protected Routes */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/products" element={<ProductPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>


            {/* ToastContainer should be outside Routes, so it works globally */}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
            />

        </div>





    );
};

export default App;