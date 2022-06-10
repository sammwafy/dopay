import React, { useState } from "react";
import { Layout } from "antd";
import SideBar from "../admin/sidebar/SideBar";
import Nav from "../admin/nav/Nav";
const { Header, Footer, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<Layout>
			<Sider style={{ backgroundColor: "white", display: "var(--mobile)" }}>
				<SideBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "white",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
						padding: "0px 10px",
					}}
				>
					<Nav showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
				</Header>
				<Content style={{ overflow: "scroll",}}>{children}</Content>
			</Layout>
		</Layout>
	);
};
export const getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default DashboardLayout;
