import { Layout as LayoutANT } from 'antd';
const { Header, Footer, Sider, Content } = LayoutANT;

const Layout = ({children}) => {
  return (
    <LayoutANT>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </LayoutANT>
  );
};

export default Layout;