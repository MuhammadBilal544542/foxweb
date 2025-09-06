import { Container, Row, Col } from "react-bootstrap";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useNavigate, useLocation } from "react-router-dom";
import { OtpInput } from "reactjs-otp-input";
import { useState } from "react";
import { otpVerification } from "../../../Redux/features/User/userApi";
import { useDispatch } from "react-redux";
const OTPVerification = () => {
  const [otp, setOtp] = useState("");
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
      requestData: { userId: location?.state?.details?.id, otp: otp },
    };

    dispatch(otpVerification(data)).then((res) => {
      if (res.type === "otpVerification/fulfilled") {
        navigate("/setNewPassword", {
          state: { details: location?.state?.details },
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
                        Text="Verify OTP"
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
