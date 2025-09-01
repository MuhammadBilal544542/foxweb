// CreatePasswordScreen.js
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainInput from '../../../Share/Input/MainInput';
import MainButton from '../../../Share/Button/MainButton';
import MainIntro from '../../../Share/Intro/MainIntro';
import { useNavigate } from 'react-router-dom';

function CreatePasswordScreen() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // TODO: Add password validation & API call here
        console.log("Password Created!");
        navigate("/register-profile"); // Example redirect after success
    };

    return (
        <div className="login-screen">
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col md={7} className="right-side d-flex justify-content-center align-items-center">
                        <div className="w-50">
                            <MainIntro
                                heading="Create Password"
                                description="Please set a strong password for your Fox account."
                            />

                            <MainInput
                                label="Password"
                                placeholder="Enter Password"
                                type="password"
                                className="mb-2"
                            />

                            <div>
                                <p style={{ background: "white", color: "black", marginBottom: "8px" }}>
                                    Must be at least 8 characters
                                </p>
                                <p style={{ background: "white", color: "black" }}>
                                    Must contain at least one number
                                </p>
                            </div>


                            <MainInput
                                label="Confirm Password"
                                placeholder="Re-enter Password"
                                type="password"
                                className="mb-4"
                            />

                            <br />

                            <MainButton name="Submit" onClick={handleSubmit} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreatePasswordScreen
