import React from "react";
import * as Yup from "yup";
import { Form, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainIntro from "../../../Share/Intro/MainIntro";
import MainButton from "../../../Share/Button/MainButton";
import { numberVerification } from "../../../Redux/features/User/userApi";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";

const NumberVerification = () => {
  const { loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMobileNumber = async (values) => {
    const data = {
      apiEndpoint: "/api/Signup/register-number",
      // requestData: JSON.stringify({ ...values }),
    };

    dispatch(numberVerification(data)).then((res) => {
      if (res.type === "numberVerification/fulfilled") {
        navigate("/otpVerification");
      }
    });
  };

  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid number")
      .required("Number is required"),
  });
console.log("loading ------------- >" , loading)
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: { number: "" },
    validationSchema: loginSchema,
    onSubmit: handleMobileNumber,
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
                    <form onSubmit={handleSubmit}>
                      <MainInput
                        type="number"
                        name="number"
                        label="Number"
                        placeholder="Enter your Number"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.number}
                        error={
                          touched.number && errors.number ? errors.number : ""
                        }
                      />

                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5"
                        type="submit"
                        Text={!values ? <Spinner animation="border" size="sm" /> : "Next"}
                        disabled={!values.number}
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

export default NumberVerification;
