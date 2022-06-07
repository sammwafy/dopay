import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
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
    }
  };

  return (
    <SignInWrapper>
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
