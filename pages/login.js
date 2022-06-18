import Layout from "../components/layout/Layout.js";
import SignIn from "../components/sign-in/sign-in";
import { useSelector } from 'react-redux'

const Login = () => {
 const state= useSelector((state) => state)

  return (
    <Layout>
      <SignIn />
    </Layout>
  );
};


export default Login;