import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Space,
  Row,
  Col,
  Typography,
  Alert,
} from "antd";
const { Title } = Typography;
import {
  UserOutlined,
  LockOutlined,
  GooglePlusCircleFilled,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { SignInWrapper } from "./styles/signin.styled";
import {
  selectCurrentUser,
  selectCurrentToken,
  setCredentials,
} from "../../store/auth/authSlice.js";
import { useLoginMutation } from "../../store/api/authApiSlice.js";
import { useDispatch } from "react-redux";
import { useCookies } from 'react-cookie';
const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['']);
  const handleSubmit = async (values) => {
    try {
      const userData = await login(values).unwrap();

      dispatch(setCredentials({ ...userData }));
      const {email,accessToken} = userData
      setCookie('email', email)
      setCookie('token', accessToken)
 
    } catch (err) {
      console.log(err);
      // if (!err?.originalStatus) {
      //   // isLoading: true until timeout occurs
      //   setErrMsg("No Server Response");
      // } else if (err.originalStatus === 400) {
      //   setErrMsg("Missing Username or Password");
      // } else if (err.originalStatus === 401) {
      //   setErrMsg("Unauthorized");
      // } else {
      //   setErrMsg("Login Failed");
      // }
      // errRef.current.focus();
    }}

  const password = false;
  return (
    <SignInWrapper>
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
              onFinish={onFinish}
            >
              <Title level={4} style={{ color: "green", textAlign: "center" }}>
                Login to your account{" "}
              </Title>
              <Row
                style={{
                  dispalay: "flex",
                  justifyContent: "space-around",
                  margin: "7% auto",
                }}
              >
                <button className="facebook">
                  <FacebookFilled />
                  <span className="facebookText">Facebook</span>
                </button>
                <button className="twitter">
                  {" "}
                  <TwitterOutlined />
                  <span className="twitterText">Twitter</span>
                </button>
                <button className="google">
                  {" "}
                  <GooglePlusCircleFilled />{" "}
                  <span className="googleText">Google+</span>
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
                <pre className="spanText"> Or Login with Email </pre>
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
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a
                  style={{
                    float: "right",
                  }}
                  className="login-form-forgot"
                  href=""
                >
                  Forgot password
                </a>
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
                  Log in
                </Button>
                {/* {!password && (
                  <Alert message="password incorrect" type="error" showIcon />
                )} */}
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col>
          <div className="rightContent">
            <div>
              <Title style={{ color: "green" }}> Welcome back</Title>
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
                Ready for the next payment !
              </p>
            </div>
            <img
              style={{
                width: "70%",
              }}
              src="login.jpg"
            ></img>
          </div>
        </Col>
      </Row>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </SignInWrapper>
  );
};
export default SignIn;
