import { useState } from "react";
import { OtpInput } from "reactjs-otp-input";
import { useDispatch, useSelector } from "react-redux";
import MainIntro from "../../../Share/Intro/MainIntro";
import MainButton from "../../../Share/Button/MainButton";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { otpVerification } from "../../../Redux/features/User/userApi";
const OTPVerification = () => {
  const { loading } = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");
  const [types, setTYpes] = useState("3");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
    handleOTPVerification();
  };

  const handleOTPVerification = () => {
    const data = {
      apiEndpoint: "/api/Signup/verify-UserOTP",
      requestData: {
        userId: location?.state?.details?.id,
        otp: otp,
        type: types,
      },
    };

    dispatch(otpVerification(data)).then((res) => {
      if (res.type === "otpVerification/fulfilled") {
        navigate("/setNewPassword", {
          state: {
            details: location?.state?.details,
            userNumber: location.state.userNumber,
          },
        });
      }
    });
  };
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
                  heading="Verify your OTP"
                  description="Enter your OTP and reset your password."
                />

                <Row className="justify-content-center">
                  <Col md={7}>
                    <form onSubmit={handleSubmit}>
                      <OtpInput
                        value={otp}
                        containerStyle={"justify-content-center"}
                        onChange={setOtp}
                        numInputs={6}
                        separator={<span>-</span>}
                        inputStyle={{
                          width: "3rem",
                          height: "3rem",
                          margin: "0 0.5rem",
                          fontSize: "1.5rem",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                        }}
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
                        disabled={otp.length !== 6}
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

export default OTPVerification;
