import { Layout as LayoutANT } from "antd";
import Footer from "./footer.js";
import MainHeader from "./mainHeader.js";
const { Sider, Content, Header } = LayoutANT;

const Layout = ({ children, noContainer }) => {
  return (
    <>
      <header>{<MainHeader />}</header>

      <Content>
        <div className={noContainer ? null : "container"}>{children}</div>
      </Content>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
export const getLayout = (page) => <Layout>{page}</Layout>;
export default Layout;
