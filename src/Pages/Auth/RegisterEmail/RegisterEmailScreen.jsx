import { Container, Row, Col } from 'react-bootstrap'
import MainInput from '../../../Share/Input/MainInput';
import MainButton from '../../../Share/Button/MainButton';
import MainIntro from '../../../Share/Intro/MainIntro'; 
import { useNavigate } from 'react-router-dom';

function RegisterEmailScreen() {
  const navigate = useNavigate();

  const handleMobileVerification = () => {
    // ✅ Navigate to Mobile OTP Verification screen
    navigate('/email-otp-verification');
  };

  return (
    <div className="register-screen">
      <Container fluid className="h-100">
        <Row className="h-100">
          {/* Right side */}
          <Col md={7} className="register-right d-flex justify-content-center align-items-center">
            <div className="w-50">
              <MainIntro
                heading="Register Email"
                description="Register your email to get started with smarter, easier shopping."
              />

              <MainInput
                label="Email"
                placeholder="Enter your Email"
                type="email"
                error="Fail"
                className="mb-2"
              />
              <MainButton name="Submit" onClick={handleMobileVerification} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterEmailScreen;
