import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainInput from '../../../Share/Input/MainInput'
import MainButton from '../../../Share/Button/MainButton'
import MainIntro from '../../../Share/Intro/MainIntro'
import { useNavigate } from 'react-router-dom'

function RegisterProfileScreen() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('Male') // ✅ Default is Male

  const handleSubmit = () => {
    // if (!firstName || !lastName || !gender) {
    //   setError('All fields are required')
    //   return
    // }

    // setError('')
    // console.log('Profile Created:', { firstName, lastName, gender })
    navigate('/register-email')
  }

  return (
    <div className="login-screen">
      <Container fluid className="h-100">
        <Row className="h-100">
          {/* Right side */}
          <Col
            md={7}
            className="right-side d-flex justify-content-center align-items-center"
          >
            <div className="w-50">
              <MainIntro
                heading="Profile Details"
                description="Enter your details to continue."
              />

              <MainInput
                label="First Name"
                placeholder="Enter First Name"
                className="mb-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <MainInput
                label="Last Name"
                placeholder="Enter Last Name"
                className="mb-4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

            <br />
              {/* Gender Selector */}
              {/* <div className="d-flex justify-content-between mb-3"> */}
             <div className="d-flex gap-2">

                <button
                  type="button"
                  className={`btn ${gender === 'Male' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setGender('Male')}
                >
                  Male
                </button>

                <button
                  type="button"
                  className={`btn ${gender === 'Female' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setGender('Female')}
                >
                  Female
                </button>
              </div>
                
              <br />

              <MainButton name="Submit" onClick={handleSubmit} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterProfileScreen
