import React, {Profiler} from 'react';
import MainLayout from "./layouts/MainLayout.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoutes from "./components/protected/ProtectedRoutes.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />


                {/* 🔐 Protected Routes */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Route>



            </Routes>
        </BrowserRouter>
    );
};

export default App;