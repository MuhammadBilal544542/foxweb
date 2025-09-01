import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import HoverButton from "../../../Share/HoverButton/HoverButton";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginScreen() {
  // validation schema
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  //  Formik setup
  const {
    values,
    handleFocus,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);

    },
  });

  return (
    <div className="login-screen">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col
            md={5}
            className="bg-black d-flex justify-content-center align-items-center"
          >
            <LeftSideLogo />
          </Col>
          <Col
            md={7}
            className="right-side d-flex justify-content-center align-items-center"
          >
            <div className="w-50">
              <MainIntro
                heading="Welcome Back"
                description="Sign in to your Fox account to continue shopping."
              />

              {/* ✅ Formik Form Start */}
              <form onSubmit={handleSubmit}>
                <MainInput
                  className="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  placeholder="Enter your email"
                  label="Email address"
                  error={touched.email && errors.email ? errors.email : ""}
                />


                {/* Password Field */}
                <MainInput
                  className={"password"}
                  type={"password"}
                  onBlur={handleBlur}
                  id={"password"}
                  onChange={handleChange}
                  value={values.password}
                  name={"password"}
                  placeholder={"Enter your Password"}
                  label={`Password`}
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : ""
                  }

                />

                <div className="d-flex justify-content-between mb-3">
                  <HoverButton
                    LinkClass={"text-black fw-bold"}
                    className={"forgot-btn"}
                    Linktext="Create New Account"
                    To={"/registerMobileScreen"}
                  />
                  <HoverButton
                    LinkClass={"text-black fw-bold"}
                    className={"forgot-btn"}
                    Linktext="Forgot Password?"
                    To={"/createPasswordScreen"}
                  />
                </div>

                <MainButton btnClassName={" text-white w-100 d-block"} type="submit" name="Submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginScreen;
