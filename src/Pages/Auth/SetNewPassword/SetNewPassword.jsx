import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import MainIntro from "../../../Share/Intro/MainIntro";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { setNewPassword } from "../../../Redux/features/User/userApi";

const SetNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.user);

  const userDetails = location?.state?.details;
  console.log("userDetails------------>", userDetails);
  const handleSetNewPassword = () => {
    const data = {
      apiEndpoint: "/api/Signup/register-Password",
      requestData: {
        password: values.password,
        userId: userDetails.id,
        countryName: userDetails.countryName,
        currencySymbol: userDetails.currencySymbol,
        currencyCode: userDetails.currencyCode,
        primaryNumber: location.state.userNumber,
      },
    };

    dispatch(setNewPassword(data)).then((res) => {
      if (res.type === "setNewPassword/fulfilled") {
        navigate("/sigUpProfile", {
          state: {
            Id: userDetails.id,
          },
        });
      }
    });
  };

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

  const { handleBlur, handleSubmit, values, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validationSchema: schema,
      onSubmit: handleSetNewPassword,
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
                  heading="Set New Password"
                  description="Create a strong new password to secure your account."
                />

                <Row className="justify-content-center">
                  <Col sm={9}>
                    <form onSubmit={handleSubmit}>
                      {/* Password Field */}
                      <MainInput
                        type={showPassword ? "text" : "password"}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={
                          touched.password && errors.password
                            ? errors.password
                            : ""
                        }
                      />

                      {/* Confirm Password Field */}
                      <MainInput
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="Re-enter your password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        error={
                          touched.confirmPassword && errors.confirmPassword
                            ? errors.confirmPassword
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
                        Text={
                          loading === "pending" ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Next"
                          )
                        }
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
