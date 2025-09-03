import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid number")
      .required("Number is required"),
  });

  const formik = useFormik({
    initialValues: { number: "" },
    validationSchema: loginSchema,
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
              <Col md={12}>
                <MainIntro
                  heading="Verify your Number"
                  description="Please Enter your number"
                />
                <Row className="justify-content-center align-items-center">
                  <Col md={7}>
                    <form onSubmit={formik.handleSubmit}>
                      <MainInput
                        type="number"
                        name="number"
                        label="Number"
                        placeholder="Enter your Number"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        error={
                          formik.touched.number && formik.errors.number
                            ? formik.errors.number
                            : ""
                        }
                      />
                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5"
                        type="submit"
                        Text="Next"
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

export default LoginScreen;
