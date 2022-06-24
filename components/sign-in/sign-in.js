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
  Image,
  Modal,
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
import { useCookies } from "react-cookie";
import Router from "next/router";
import { useState } from "react";
import Loading from "../loading/loading.js";
const SignIn = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies([""]);
  //modal setting
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
      Router.push("/");
    }, 2000);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const userData = await login(values).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData }));
      const { email, accessToken, id, role } = userData;
      setCookie("token", accessToken);
      if (role) {
        Router.push("/admin");
      } else {
        Router.push("/user");
      }
    } catch (err) {
      console.log(err);
      setVisible(true);
      setMsg(err.data);
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
    }
  };

  const password = false;
  return (
    <>
      <SignInWrapper>
        {isLoading ? (
          <Loading />
        ) : (
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
                  {/* <Title level={4} style={{ color: "green", textAlign: "center" }}>
								Login to your account{" "}
							</Title>
							<Row
								style={{
									dispalay: "flex",
									justifyContent: "space-around",
									margin: "7% auto",
								}}
							>
								<button className='facebook'>
									<FacebookFilled />
									<span className='facebookText'>Facebook</span>
								</button>
								<button className='twitter'>
									{" "}
									<TwitterOutlined />
									<span className='twitterText'>Twitter</span>
								</button>
								<button className='google'>
									{" "}
									<GooglePlusCircleFilled />{" "}
									<span className='googleText'>Google+</span>
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
								<pre className='spanText'> Or Login with Email </pre>
								<hr
									style={{
										width: "calc(15%)",
										textAlign: "left",
										margin: "1px 2px",
										display: "inline-block",
									}}
								></hr>
							</div> */}
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
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
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

                    {/* <a
									style={{
										float: "right",
									}}
									className='login-form-forgot'
									href=''
								>
									Forgot password
								</a> */}
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
                <Image
                  style={{
                    width: "70%",
                  }}
                  src="login.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        )}
      </SignInWrapper>
      <Modal
        title="Welcome to dopay"
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        okButtonProps={{
          style: { backgroundColor: "#B4CD93", borderColor: "#B4CD93" },
        }}
        okText={"Go home"}
      >
        <h1>{msg}</h1>
      </Modal>
    </>
  );
};
export default SignIn;
