import React from "react";
import Layout from "../Layouts/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginScreen from '../Pages/Auth/LoginScreen/LoginScreen.jsx';
import Error from '../Pages/Error/Error.jsx';
import ProtectedRoute from "./ProtectedRoute.js";
import Subscription from '../Pages/Subscription/Subscription.jsx';
import ForgotPassword from "../Pages/Auth/ForgotPassword/ForgotPassword.jsx";
import SetNewPassword from "../Pages/Auth/SetNewPassword/SetNewPasswsord.jsx";
import EmailOTPVerification from "../Pages/Auth/EmailOTPVerification/EmailOTPVerification.jsx";
import SigUpProfile from "../Pages/Auth/SigUpProfile/SigUpProfile.jsx";
import NumberVerification from "../Pages/Auth/RegisterMobile/RegisterMobileScreen.jsx";

const RoutesPage = () => {
    const usersRouts = [
        { path: '/', element: <LoginScreen /> },
        { path: "/forgotPassword", element: <ForgotPassword /> },
        { path: "/setNewPassword", element: <SetNewPassword /> },
        { path: "/emailOTPVerification", element: <EmailOTPVerification /> },
        { path: "/sigUpProfile", element: <SigUpProfile /> },
        { path: "/numberVerification", element: <NumberVerification /> },
   
    ];

    return (
        <Router>
            <Layout>
                <Routes>
                    {usersRouts.map((items, index) => (
                        <Route key={index} path={items.path} element={items.element} />
                    ))}
                    <Route
                        path="/subscription"
                        element={
                            <ProtectedRoute>
                                <Subscription />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default RoutesPage;
