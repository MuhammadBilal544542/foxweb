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

const RoutesPage = () => {
    const usersRouts = [
        { path: '/', element: <LoginScreen /> },
        { path: "/forgotPassword", element: <ForgotPassword /> },
        { path: "/setNewPassword", element: <SetNewPassword /> },
        { path: "/emailOTPVerification", element: <EmailOTPVerification /> },
   
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
