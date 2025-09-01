import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainButton from '../../../Share/Button/MainButton';
import MainIntro from '../../../Share/Intro/MainIntro';

// OTP Input Component
function OtpInput({ length = 6, onChange }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus(); // focus first input on mount
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      onChange(newOtp.join(''));

      if (index > 0 && !otp[index]) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="otp-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="otp-input"
        />
      ))}
    </div>
  );
}




// Mobile Verification Screen
function EmailOTPVerification() {
  const [otpCode, setOtpCode] = useState('');

  const HandleMobileVerification = () => {
    console.log('Entered OTP:', otpCode);
  };

  return (
     <div className="register-screen">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col md={7} className="register-right d-flex justify-content-center align-items-center">
            <div className="w-50">
              <MainIntro
                heading="Email Verification"
                description="Enter the 6-digit OTP sent to your Email to verify your account and secure access."
              />
             <OtpInput length={6} onChange={(code) => setOtpCode(code)} />
              <br />
              <MainButton name="Submit" onClick={HandleMobileVerification} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmailOTPVerification;
