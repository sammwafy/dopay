import React from "react";
import { Layout } from "antd";
import SideBar from "../admin/sidebar/SideBar";
import Nav from "../admin/nav/Nav";
const { Header, Footer, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
	return (
		<Layout>
			<Sider style={{ backgroundColor: "white" }}>
				<SideBar />
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "white",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
					}}
				>
					<Nav />
				</Header>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
