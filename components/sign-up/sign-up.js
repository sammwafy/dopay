import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Select,
  Row,
  Col,
  Typography,
} from "antd";
const { Title } = Typography;
import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  TwitterOutlined,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
import { SignUpWrapper } from "./styles/signup.styled";
import {
  selectCurrentUser,
  selectCurrentToken,
  setCredentials,
} from "../../store/auth/authSlice.js";
import { useRegisterMutation } from "../../store/api/registerApiSlice";
import { useDispatch } from "react-redux";
// import { useCookies } from "react-cookie";
const SignUp = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  // const [cookies, setCookie, removeCookie] = useCookies(['']);
  const handleSubmit = async (values) => {
    try {
      const userData = await register(values).unwrap();

      dispatch(setCredentials({ ...userData }));
      // const { email, accessToken } = userData;
      // setCookie("email", email);
      // setCookie("token", accessToken);
    } catch (err) {
      console.log(err);
    }
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="20">+20</Option>
      </Select>
    </Form.Item>
  );
  return (
    <SignUpWrapper>
      <Row className="signContainer" gutter={100}>
        <Col>
          <Card
            bordered={false}
            style={{
              height: "auto",
              border: "solid 1px green",
              borderRadius: "5px",
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
            >
              <Title level={4} style={{ color: "green", textAlign: "center" }}>
                Create Your Account{" "}
              </Title>
              <Row
                style={{
                  dispalay: "flex",
                  justifyContent: "space-around",
                  margin: "7% auto",
                }}
              >
                <button className="facebook">
                  <FacebookFilled />{" "}
                  <span className="facebookText"> Facebook</span>
                </button>
                <button className="twitter">
                  {" "}
                  <TwitterOutlined />{" "}
                  <span className="twitterText"> Twitter</span>
                </button>
                <button className="google">
                  {" "}
                  <GooglePlusCircleFilled />{" "}
                  <span className="googleText"> Google+</span>
                </button>
              </Row>
              <div style={{ textAlign: "center", margin: "7% auto" }}>
                <hr
                  style={{
                    width: "calc(15%)",
                    textAlign: "left",
                    margin: "1px 2px",
                    display: "inline-block",
                  }}
                ></hr>
                <pre className="spanText"> Or Register with Email </pre>
                <hr
                  style={{
                    width: "calc(15%)",
                    textAlign: "left",
                    margin: "1px 2px",
                    display: "inline-block",
                  }}
                ></hr>
              </div>
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name!",
                  },
                ]}
              >
                <Input placeholder=" Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The E-mail is not valid !",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="userPassword"
                    //label="Password"

                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder=" Password" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="confirm"
                    dependencies={["userPassword"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("userPassword") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error("Should accept Service & privacy policy")
                          ),
                  },
                ]}
              >
                <Checkbox>
                  I have read and accept the terms of{" "}
                  <a href="">Service & privacy policy</a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    width: "100%",
                  }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col>
          <div className="rightContent">
            <div>
              <Title style={{ color: "green" }}> Create a free account</Title>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "16px",
                  color: "grey",
                }}
              >
                and begin sending or recieving money
              </p>
            </div>
            <img
              style={{
                width: "70%",
              }}
              src="Register.jpg"
            ></img>
          </div>
        </Col>
      </Row>
    </SignUpWrapper>
  );
};
export default SignUp;
