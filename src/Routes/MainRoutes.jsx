import React from "react";
import Layout from "../Layouts/Layout.jsx";
import Error from "../Pages/Error/Error.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
import Subscription from "../Pages/Subscription/Subscription.jsx";
import LoginScreen from "../Pages/Auth/LoginScreen/LoginScreen.jsx";
import SigUpProfile from "../Pages/Auth/SigUpProfile/SigUpProfile.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailVerification from "../Pages/Auth/EmailVerification/EmailVerification.jsx";
import SetNewPassword from "../Pages/Auth/SetNewPassword/SetNewPassword.jsx";
import OTPVerification from "../Pages/Auth/OTPVerification/OTPVerification.jsx";
import NumberVerification from "../Pages/Auth/NumberVerification/NumberVerification.jsx";

const RoutesPage = () => {
  const usersRouts = [
    { path: "/", element: <LoginScreen /> },
    { path: "/sigUpProfile", element: <SigUpProfile /> },
    { path: "/emailVerification", element: <EmailVerification /> },
    { path: "/setNewPassword", element: <SetNewPassword /> },
    { path: "/otpVerification", element: <OTPVerification /> },
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
