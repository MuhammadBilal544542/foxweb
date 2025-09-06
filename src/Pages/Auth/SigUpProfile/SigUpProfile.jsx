import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import MainInput from "../../../Share/Input/MainInput";
import { useDispatch, useSelector } from "react-redux";
import MainIntro from "../../../Share/Intro/MainIntro";
import MainButton from "../../../Share/Button/MainButton";
import { Container, Row, Col, NavbarBrand } from "react-bootstrap";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import { sigUpProfile } from "../../../Redux/features/User/userApi.js";

const SigUpProfile = () => {
  const profileImage = require("../../../assets/Gallery/Logo/Logo.png");
  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSigUpProfile = async (values) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("dob", values.dob);
    formData.append("gender", values.gender);
    formData.append("profileImage", values.profileImage); 

    const data = {
      apiEndpoint: "/api/Signup/update-UserProfile",
      requestData: formData,
    };

    dispatch(sigUpProfile(data)).then((res) => {
      if (res.type === "sigUpProfile/fulfilled") {
        navigate("/emailRegister");
      }
    });
  };
  const sigUpProfileSchema = Yup.object({
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of Birth is required"),
    lastName: Yup.string().required("Last name is required"),
    firstName: Yup.string().required("First name is required"),
    profileImage: Yup.mixed().required("Profile Image is required"),
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      profileImage: "",
    },
    validationSchema: sigUpProfileSchema,
    onSubmit: handleSigUpProfile,
  });

  const fields = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
    },
    {
      type: "date",
      name: "dob",
      label: "Date of Birth",
      placeholder: "",
    },
  ];

  const genderOptions = [
    { id: "M", value: "Male", label: "Male" },
    { id: "F", value: "Female", label: "Female" },
    // { id: "O", value: "Other", label: "Other" },
  ];

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
                    <form onSubmit={handleSubmit}>
                      <input
                        type="file"
                        name="profileImage"
                        id="img"
                        className="d-none"
                        onChange={(event) =>
                          setFieldValue(
                            "profileImage",
                            event.currentTarget.files[0]
                          )
                        }
                      />
                      <center>
                        <label
                          htmlFor="img"
                          className="mb-4 text-center d-flex justify-content-center align-items-center rounded-circle overflow-hidden border border-black border-2"
                          style={{ width: "150px", height: "150px" }} // fixed size circle
                        >
                          {values.profileImage ? (
                            <img
                              src={URL.createObjectURL(values.profileImage)}
                              alt="preview"
                              className="w-100 h-100 object-fit-cover"
                            />
                          ) : (
                            <img
                              src={profileImage}
                              alt="logo"
                              className="w-100 h-100 object-fit-cover"
                            />
                          )}
                        </label>
                      </center>

                      {fields.map((field, index) => (
                        <MainInput
                          key={index}
                          type={field.type}
                          name={field.name}
                          label={field.label}
                          placeholder={field.placeholder}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values[field.name]}
                          error={
                            touched[field.name] && errors[field.name]
                              ? errors[field.name]
                              : ""
                          }
                        />
                      ))}

                      <Row className="mt-3">
                        <Col md={12}>
                          {genderOptions.map((option) => (
                            <span key={option.id} className="me-4">
                              <input
                                type="radio"
                                name="gender"
                                id={option.id}
                                value={option.value}
                                onChange={handleChange}
                                checked={values.gender === option.value}
                              />
                              <label className="ms-2" htmlFor={option.id}>
                                {option.label}
                              </label>
                            </span>
                          ))}

                          {touched.gender && errors.gender && (
                            <div
                              className="text-danger"
                              style={{ fontSize: "13px" }}
                            >
                              {errors.gender}
                            </div>
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
                        <span className="text-decoration-underline">
                          Sign In
                        </span>
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
