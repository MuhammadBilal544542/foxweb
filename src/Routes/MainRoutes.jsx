import React from "react";
import Layout from "../Layouts/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginScreen from '../Pages/Auth/LoginScreen/LoginScreen.jsx';
import MobileOtpVerification from '../Pages/Auth/MobileOtpVerification/MobileOtpVerification.jsx';
import RegisterMobileScreen from '../Pages/Auth/RegisterMobile/RegisterMobileScreen.jsx';
import CreatePasswordScreen from '../Pages/Auth/CreatePassword/CreatePasswordScreen.jsx';
import RegisterEmailScreen from '../Pages/Auth/RegisterEmail/RegisterEmailScreen.jsx';
import EmailOTPVerification from '../Pages/Auth/EmailOTPVerification/EmailOTPVerification.jsx';
import RegisterProfileScreen from '../Pages/Auth/RegisterProfile/RegisterProfileScreen.jsx';
import Error from '../Pages/Error/Error.jsx';
import ProtectedRoute from "./ProtectedRoute.js";
import Subscription from '../Pages/Subscription/Subscription.jsx';

const RoutesPage = () => {
    const usersRouts = [
        { path: '/', element: <LoginScreen /> },
        { path: "/mobileOtpVerification", element: <MobileOtpVerification /> },
        { path: "/registerMobileScreen", element: <RegisterMobileScreen /> },
        { path: "/createPasswordScreen", element: <CreatePasswordScreen /> },
        { path: "/registerEmailScreen", element: <RegisterEmailScreen /> },
        { path: "/emailOTPVerification", element: <EmailOTPVerification /> },
        { path: "/registerProfileScreen", element: <RegisterProfileScreen /> },
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
