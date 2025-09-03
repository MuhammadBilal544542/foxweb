import { Container, Row, Col } from "react-bootstrap";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { OtpInput } from "reactjs-otp-input";
import { useState } from "react";
const EmailOTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);

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
                  heading="Verify your email OTP"
                  description="Enter your email OTP and reset your password."
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

export default EmailOTPVerification;
