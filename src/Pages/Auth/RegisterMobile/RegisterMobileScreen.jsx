import { Container, Row, Col } from 'react-bootstrap'
import MainInput from '../../../Share/Input/MainInput';
import MainButton from '../../../Share/Button/MainButton';
import MainIntro from '../../../Share/Intro/MainIntro'; 
import { useNavigate } from 'react-router-dom';

function RegisterMobileScreen() {
  const navigate = useNavigate();

  const HandleMobileVerification = () => {
    navigate('/mobile-verification'); // ✅ keep path consistent
  };

  return (
    <div className="register-screen">
      <Container fluid className="h-100">
        <Row className="h-100">

          {/* Right side */}
          <Col md={7} className="register-right d-flex justify-content-center align-items-center">
            <div className="w-50">
              <MainIntro
                heading="Register Account"
                description="Sign up to Fox and make your shopping more fun and simple."
              />

              <MainInput
                label="Number"
                placeholder="Enter Mobile Number"
                type="number"
                error="Fail"
                className="mb-2"
              />
              <MainButton name="Submit" onClick={HandleMobileVerification} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterMobileScreen
