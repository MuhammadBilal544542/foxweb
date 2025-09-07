import React, { useState } from "react";   // ✅ add useState
import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false); // ✅ state

  // validation schema
  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^\d+$/, "Number must contain only digits")
      .required("Number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      number: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="login-screen">
      <Container fluid>
        <Row className="min-vh-100">
          <Col
            md={5}
            className="bg-black d-flex justify-content-center align-items-center custom-radius"
          >
            <LeftSideLogo />
          </Col>

          <Col md={7}>
            <Row className="justify-content-center align-items-center h-100">
              <Col md={12}>
                <MainIntro
                  heading="Welcome To Fox"
                  description="Sign in to your Fox account to keep shopping."
                />
                <Row className="justify-content-center align-items-center">
                  <Col sm={9}>
                    <form onSubmit={handleSubmit}>
                      <MainInput
                        className="number"
                        type="number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.number}
                        name="number"
                        placeholder="Enter your number"
                        label="Number"
                        error={touched.number && errors.number ? errors.number : ""}
                      />

                      {/* Password Field */}
                      <MainInput
                        className="password"
                        type={showPassword ? "text" : "password"}   // ✅ toggle
                        onBlur={handleBlur}
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        placeholder="Enter your password"
                        label="Password"
                        error={touched.password && errors.password ? errors.password : ""}
                      />

                      <div className="d-flex justify-content-between mb-3">
                        <div className="">

                          <input type="checkbox" id="pass" className="me-2" />
                          <label htmlFor="pass"
                            onClick={() => setShowPassword(!showPassword)} // ✅ toggle
                            style={{ cursor: "pointer" }}
                          >
                            Show Password
                          </label>
                        </div>
                        <Link
                          to="/forgotPassword"
                          className="text-decoration-underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <MainButton
                        btnClassName="text-uppercase bg-black border border-0 w-100 p-3 mt-5"
                        type="submit"
                        Text="Log In"
                      />
                    </form>
                    <div className="text-center mt-4">
                      <Link to="/numberVerification">Don't have an account? <span className="text-decoration-underline">Sign up</span></Link>
                    </div>


                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginScreen;
