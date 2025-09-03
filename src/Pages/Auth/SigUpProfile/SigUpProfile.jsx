import { Container, Row, Col } from "react-bootstrap";
import MainInput from "../../../Share/Input/MainInput";
import MainButton from "../../../Share/Button/MainButton";
import MainIntro from "../../../Share/Intro/MainIntro";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SigUpProfile = () => {
  const navigate = useNavigate();

  const schema = Yup.object({
    fName: Yup.string().required("First name is required"),
    lName: Yup.string().required("Last name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      dob: "",
      gender: "",
    },
    validationSchema: schema,
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
                  heading="Verify your Profile"
                  description="Enter your details to sign up."
                />

                <Row className="justify-content-center">
                  <Col md={7}>
                    <form onSubmit={formik.handleSubmit}>
                      <MainInput
                      className={""}
                        type="text"
                        name="fName"
                        label="First Name"
                        placeholder="Enter your first name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.fName}
                        error={formik.touched.fName && formik.errors.fName ? formik.errors.fName : ""}
                      />

                      <MainInput
                        type="text"
                        name="lName"
                        label="Last Name"
                        placeholder="Enter your last name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lName}
                        error={formik.touched.lName && formik.errors.lName ? formik.errors.lName : ""}
                      />

                      <MainInput
                        type="date"
                        name="dob"
                        label="Date of Birth"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                        error={formik.touched.dob && formik.errors.dob ? formik.errors.dob : ""}
                      />

                      <Row className="mt-3">
                        <Col md={12}>
                          <span className="me-4">
                            <input
                              type="radio"
                              name="gender"
                              id="M"
                              value="Male"
                              onChange={formik.handleChange}
                              checked={formik.values.gender === "Male"}
                            />
                            <label className="ms-2" htmlFor="M">
                              Male
                            </label>
                          </span>
                          <span>
                            <input
                              type="radio"
                              name="gender"
                              id="F"
                              value="Female"
                              onChange={formik.handleChange}
                              checked={formik.values.gender === "Female"}
                            />
                            <label className="ms-2" htmlFor="F">
                              Female
                            </label>
                          </span>
                          {formik.touched.gender && formik.errors.gender && (
                            <div className="text-danger" style={{fontSize:"13px"}}>{formik.errors.gender}</div>
                          )}
                        </Col>
                      </Row>

                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5 text-white"
                        type="submit"
                        Text="next"
                      />
                    </form>

                    <div className="text-center mt-4">
                      <Link to="/">
                        Already have an account?{" "}
                        <span className="text-decoration-underline">Sign In</span>
                      </Link>
                    </div>
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

export default SigUpProfile;
