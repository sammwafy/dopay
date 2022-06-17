import { Layout as LayoutANT } from "antd";
// import MainHeader from "./header/header.js";
const { Sider, Content } = LayoutANT;

const Layout = ({ children, noContainer }) => {
  return (
    <>
      <header>
        {/* <Mainheader/> */}
      </header>

      <Content>
        <div className={noContainer ? null : "container"}>{children}</div>
      </Content>

      <footer>footer</footer>
    </>
  );
};
export const getLayout = (page) => <Layout>{page}</Layout>;
export default Layout;
