import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const EmailVerification = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
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
                  heading="Verify your email"
                  description="Enter your email to receive an OTP and reset your password."
                />

                <Row className="justify-content-center">
                  <Col md={7}>
                    <form onSubmit={formik.handleSubmit}>
                      <MainInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your Email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : ""
                        }
                      />

                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5 text-white"
                        type="submit"
                        Text="Send OTP"
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

export default EmailVerification;
