import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import MainIntro from "../../../Share/Intro/MainIntro";
import { useDispatch } from "react-redux";
import MainButton from "../../../Share/Button/MainButton";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import {
  numberVerification,
  getCountryCode,
} from "../../../Redux/features/User/userApi";

const NumberVerification = () => {
  const [registerNumber, setRegisterNumber] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get all Country Code api call
  useEffect(() => {
    const data = { apiEndpoint: "/api/Signup/getAllCountries" };
    dispatch(getCountryCode(data)).then((res) => {
      if (res.type === "getCountryCode/fulfilled") {
        setCountryList(res?.payload);
      }
    });
  }, [dispatch]);

  // Yup Validation Schema
  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Enter a valid number")
      .required("Number is required"),
    countryCode: Yup.string().required("Country code is required"),
  });

  // Formik setup
  const { handleSubmit, values, touched, errors, setFieldValue } = useFormik({
    initialValues: { number: "", countryCode: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const data = {
        apiEndpoint: "/api/Signup/register-number",
        requestData: { ...registerNumber },
      };

      dispatch(numberVerification(data)).then((res) => {
        if (res.type === "numberVerification/fulfilled") {
          setLoading(true);
          navigate("/otpVerification", {
            state: { details: userDetails },
          });
          setLoading(false);
        }
      });
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
                    <form onSubmit={handleSubmit}>
                      {/* Phone Input integrated with Formik */}
                      <PhoneInput
                        country={"pk"}
                        value={values.number}
                        onChange={(value, country) => {
                          setFieldValue("number", value);
                          setFieldValue("countryCode", country.dialCode);

                          // find country details from countryList
                          const selectedCountry = countryList?.data?.find(
                            (c) => c.countryCode === `+${country.dialCode}`
                          );

                          if (selectedCountry) {
                            setUserDetails(selectedCountry);
                            const finalObject = {
                              number: value,
                              phonecode: `+${country.dialCode}`,
                              countryName: selectedCountry.countryName,
                              currencyName: selectedCountry.currencyName,
                              currencyCode: selectedCountry.currencyCode,
                              currencySymbol: selectedCountry.currencySymbol,
                            };

                            setRegisterNumber(finalObject);
                            console.log("Register Object =>", finalObject);
                          }
                        }}
                        onlyCountries={["pk", "gb"]}
                        preferredCountries={["pk", "gb"]}
                        inputStyle={{ width: "100%" }}
                      />

                      {errors.number && touched.number && (
                        <p style={{ color: "red" }}>{errors.number}</p>
                      )}

                      {/* Submit Button */}
                      <MainButton
                        btnClassName="text-uppercase bg-black border-0 w-100 p-3 mt-5"
                        type="submit"
                        Text={
                          loading ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Next"
                          )
                        }
                        disabled={!values.number || loading}
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
