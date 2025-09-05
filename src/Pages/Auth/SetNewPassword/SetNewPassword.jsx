import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Validation schema
  const schema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
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
              {/* <div className="badge ">
                <button
                  onClick={() => navigate(-1)}
                  className="d-flex align-items-center gap-1 bg-black text-white border-0 p-2 mx-3 rounded"
                >
                  <IoMdArrowRoundBack size={15} /> Back
                </button>
              </div> */}
              <Col md={12}>
                <MainIntro
                  heading="Set New Password"
                  description="Create a strong new password to secure your account."
                />

                <Row className="justify-content-center">
                  <Col md={7}>
                    <form onSubmit={formik.handleSubmit}>
                      {/* Password Field */}
                      <MainInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={
                          formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : ""
                        }
                      />

                      {/* Confirm Password Field */}
                      <MainInput
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Re-enter your password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        error={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? formik.errors.confirmPassword
                            : ""
                        }
                      />

                      {/* Show/Hide Password Toggle */}
                      <div className="mb-3">
                        <input
                          type="checkbox"
                          id="showPass"
                          checked={showPassword}
                          onChange={() => setShowPassword(!showPassword)}
                          className="me-2"
                        />
                        <label htmlFor="showPass">Show Passwords</label>
                      </div>

                      {/* Submit */}
                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-3 text-white"
                        type="submit"
                        Text="Set Password"
                      />
                    </form>

                    <div className="text-center mt-4">
                      <Link to="/">
                        Already have an account?{" "}
                        <span className="text-decoration-underline">
                          Sign In
                        </span>
                      </Link>
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
};

export default SetNewPassword;
