import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import MainIntro from "../../../Share/Intro/MainIntro";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../../../Share/Button/MainButton";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import LeftSideLogo from "../../../Share/LogoSidePage/LeftSideLogo";
import {
  numberVerification,
  getCountryCode,
} from "../../../Redux/features/User/userApi";

const NumberVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const { loading } = useSelector((state) => state.user);
  const [registerNumber, setRegisterNumber] = useState({});
  const [phoneNumberLimit, setPhoneNumberLimit] = useState(0);

  // ✅ dynamic schema based on phoneNumberLimit
  const loginSchema = Yup.object().shape({
    number: Yup.string()
      .matches(
        new RegExp(
          `^[0-9]{${phoneNumberLimit || 1},${phoneNumberLimit || 20}}$`
        ),
        `Enter a valid ${phoneNumberLimit}-digit number`
      )
      .required("Number is required"),
    countryCode: Yup.string().required("Country code is required"),
  });

  // Formik setup
  const { handleSubmit, values, touched, errors, setFieldValue, isValid } =
    useFormik({
      initialValues: { number: "", countryCode: "" },
      enableReinitialize: true, // important: update when phoneNumberLimit changes
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        const data = {
          apiEndpoint: "/api/Signup/register-number",
          requestData: { ...registerNumber },
        };

        dispatch(numberVerification(data)).then((res) => {
          if (res.type === "numberVerification/fulfilled") {
            navigate("/otpVerification", {
              state: { details: userDetails },
            });
          }
        });
      },
    });

  // get all Country Code api call
  useEffect(() => {
    const data = { apiEndpoint: "/api/Signup/getAllCountries" };
    dispatch(getCountryCode(data)).then((res) => {
      if (res.type === "getCountryCode/fulfilled") {
        setCountryList(res?.payload);
      }
    });
  }, [dispatch]);

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
                      <label htmlFor="phone">Phone Number</label>{" "}
                      <PhoneInput
                        id="phone"
                        className="mobileNumber"
                        country={"gb"}
                        value={`${values.countryCode}${values.number}`} // join for display
                        onChange={(value, country) => {
                          const localNumber = value.replace(
                            country.dialCode,
                            ""
                          );

                          setFieldValue("number", localNumber);
                          setFieldValue("countryCode", country.dialCode);

                          // find country details
                          const selectedCountry = countryList?.data?.find(
                            (c) => c.countryCode === `+${country.dialCode}`
                          );

                          if (selectedCountry) {
                            setUserDetails(selectedCountry);
                            setPhoneNumberLimit(
                              selectedCountry?.phoneNumberLimit || 10
                            );

                            const finalObject = {
                              number: localNumber,
                              phonecode: `+${country.dialCode}`,
                              countryName: selectedCountry.countryName,
                              currencyName: selectedCountry.currencyName,
                              currencyCode: selectedCountry.currencyCode,
                              currencySymbol: selectedCountry.currencySymbol,
                            };

                            setRegisterNumber(finalObject);
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
                          loading === "pending" ? (
                            <Spinner animation="border" size="sm" />
                          ) : (
                            "Next"
                          )
                        }
                        disabled={values.number.length !== phoneNumberLimit}
                        // disabled={!isValid || loading === "pending"} // ✅ disable until valid
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
