import * as Yup from "yup";
import { useFormik } from "formik";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainIntro from "../../../Share/Intro/MainIntro";
import MainButton from "../../../Share/Button/MainButton";
import { useNavigate, useLocation } from "react-router-dom";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { emailVerification } from "../../../Redux/features/User/userApi";
import { useDispatch, useSelector } from "react-redux";

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleEmailVerification = () => {
    const data = {
      apiEndpoint: "/api/Signup/update-user-contact",
      requestData: {
        text: values.email,
        userId: location?.state?.Id,
        type: 2,
      },
    };

    dispatch(emailVerification(data)).then((res) => {
      if (res.type === "emailVerification/fulfilled") {
        navigate("/otpVerification", {
          // state: {
          //   details: location?.state?.details,
          //   userNumber: location.state.userNumber,
          // },
        });
      }
    });
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const { handleBlur, handleSubmit, values, touched, errors, handleChange } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: schema,
      onSubmit: handleEmailVerification,
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
                  <Col md={9}>
                    <form onSubmit={handleSubmit}>
                      <MainInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        error={
                          touched.email && errors.email ? errors.email : ""
                        }
                      />

                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5 text-white"
                        type="submit"
                        Text={
                          loading === "pending" ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Next"
                          )
                        }
                        disabled={!values?.email}
                      />
                    </form>
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
