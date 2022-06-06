import React, { useState } from "react";
import { Layout } from "antd";

import UserNav from "../user/userNav/userNav";
import UserSideBar from './../user/userSidebar/userSidebar';
const { Header, Footer, Sider, Content } = Layout;

const UserDashboardLayout = ({ children }) => {
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<Layout>
			<Sider style={{ backgroundColor: "white", display: "var(--mobile)" }}>
				<UserSideBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			</Sider>
			<Layout>
				<Header
					style={{
						backgroundColor: "white",
						boxShadow: "box-shadow: -2px 4px 6px -2px rgba(0,0,0,0.82)",
						padding: "0px 10px",
					}}
				>
					<UserNav showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
				</Header>
				<Content style={{ backgroundColor: "#F5F5F5",  overflow: 'autO' }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default UserDashboardLayout;
//export const getLayout = (page) => <UserDashboardLayout> {page}</UserDashboardLayout> 