import { Layout as LayoutANT } from "antd";
const { Header, Footer, Sider, Content } = LayoutANT;

const Layout = ({ children, noContainer }) => {
  return (
    <LayoutANT>
      <Header>Header</Header>
      <Content>
        <div className={noContainer ? null : "container"}>{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </LayoutANT>
  );
};

export default Layout;
